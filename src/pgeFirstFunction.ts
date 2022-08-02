import { APIGatewayEvent } from "aws-lambda";
import { JsonDataApiClient } from './client/JsonDataApiClient';
import {s3Client} from './client/s3Client'
import pgeLogger from './lib/Logger';
const { Parser } = require('json2csv');

export const handler = async (event: APIGatewayEvent) => {

    

    const data = await JsonDataApiClient();
    pgeLogger({saverity: 'info', message: 'Lambda response',data: {data, event}});

    const parser = new Parser();
    const csv = parser.parse(data);
    console.log(csv);


    s3Client(process.env.S3_BUCKET_NAME || "", csv);
   
    const jsonData = {
        statusCode: 200,
        body: JSON.stringify(csv),
    };

  return jsonData;
};
