import type { AxiosResponse } from "axios";
import axios from "axios";
import { ApiRequestException } from "../exceptions/api-request-exception";
import PGEError from "../exceptions/error";
import { JsonApiResponse, JsonData } from "../interfaces";
import pgeLogger from "../lib/Logger";
import { mapJsonApiResponse } from "../mapper/mapJsonApiResponse";

const ERROR_FETCHING_JSON_FROM_API = "Error Fetching JSON from API";
const API_BAD_DATA = "Json Data api client: Bad Data";

export const JsonDataApiClient = async (): Promise<JsonData[]> => {
  const HOST_URL: string = process.env.JSON_API_HOST
    ? process.env.JSON_API_HOST
    : "";
  const requestUrl = `${HOST_URL}/gbfs/en/station_information.json`;
  let jsonApiResponse: JsonApiResponse;
  try {
    const apiResponse: AxiosResponse = await axios.get(requestUrl);
    jsonApiResponse = apiResponse.data;
    pgeLogger({
      saverity: "info",
      message: "JSON Api Response",
      data: { jsonApiResponse: jsonApiResponse },
    });
  } catch (e: any) {
    pgeLogger({
      saverity: "error",
      message: ERROR_FETCHING_JSON_FROM_API,
      data: { error: e },
    });
    throw new ApiRequestException(ERROR_FETCHING_JSON_FROM_API);
  }

  if (
    !jsonApiResponse ||
    !jsonApiResponse.data ||
    !jsonApiResponse.data.stations
  ) {
    pgeLogger({
      saverity: "error",
      message: API_BAD_DATA,
      data: { jsonApiResponse },
    });
    throw new PGEError(API_BAD_DATA, 400);
  }
  return mapJsonApiResponse(jsonApiResponse);
};
