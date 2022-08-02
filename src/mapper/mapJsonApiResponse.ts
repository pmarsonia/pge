import { JsonApiResponse, JsonData } from '../interfaces';

export const mapJsonApiResponse = (apiResponse: JsonApiResponse): JsonData[] => {
    const JsonData: JsonData[] = [];
    for(let apiData of apiResponse.data.stations ) {
        const {
            eightd_has_key_dispenser,
            capacity,
            name,
            eightd_station_services,
            lat,
            lon,
            short_name,
            external_id,
            has_kiosk,
            region_id,
            legacy_id,
            station_type,
            electric_bike_surcharge_waiver,
            station_id,
            
        } =  apiData;
        if (capacity && capacity < 12) {
            JsonData.push({
                eightd_has_key_dispenser,
                capacity,
                name,
                eightd_station_services,
                lat,
                lon,
                short_name,
                externalId: external_id,
                has_kiosk,
                region_id,
                legacyId: legacy_id,
                station_type,
                electric_bike_surcharge_waiver,
                stationId: station_id,
                
            });
        } 
        
    }
    return JsonData;
}