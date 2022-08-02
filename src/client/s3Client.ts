import AWS from 'aws-sdk';

const bucketName = process.env.S3_BUCKET_NAME || "";
const s3bucket = new AWS.S3();

export const  s3Client = async (objectName: any, objectData: any) => {
  const params = {
    Bucket: bucketName,
    Key: objectName,
    Body: objectData
  };
  //console.log(params, s3bucket);
  
  s3bucket.upload(params, (err: any, data: any) => {
    if (err) throw err;
    console.log(`File uploaded successfully at ${data.Location}`)
  });
}