package com.joaov.helmes.service;

import com.joaov.helmes.model.CityModel;

import java.util.List;

public interface CityService {
    List<CityModel> getAllCities(String name);

    CityModel updateCity(Long id, CityModel city);
}
