export interface JsonData {
    eightd_has_key_dispenser?: boolean;
    capacity?: number;
    name?: string;
    eightd_station_services?: any[];
    lat?: number;
    short_name?: string;
    externalId?: string;
    has_kiosk?: boolean;
    region_id?: string;
    legacyId?: string;
    station_type?: string;
    electric_bike_surcharge_waiver?: boolean;
    stationId?: string;
    lon?: number;
}

export interface JsonApiDataResponse {
    eightd_has_key_dispenser?: boolean;
    capacity?: number;
    rental_uris?: any;
    rental_methods?: any;
    name?: string;
    eightd_station_services?: any[];
    lat?: number;
    short_name?: string;
    external_id?: string;
    has_kiosk?: boolean;
    region_id?: string;
    legacy_id?: string;
    station_type?: string;
    electric_bike_surcharge_waiver?: boolean;
    station_id?: string;
    lon?: number;
}

export interface JsonApiStation {
    stations: JsonApiDataResponse[]
}

export interface JsonApiResponse {
    data: JsonApiStation;
}