package com.joaov.helmes.controller;

import com.joaov.helmes.api.GenericResponse;
import com.joaov.helmes.api.SuccessResponse;
import com.joaov.helmes.model.CityModel;
import com.joaov.helmes.service.CityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/city")
public class CityController {

    CityService service;

    @Autowired
    public CityController(CityService service) {
        this.service = service;
    }

    @GetMapping()
    public GenericResponse<List<CityModel>> getAllCities(@RequestParam(name = "name", required = false) String name) {
        List<CityModel> response = service.getAllCities(name);
        return new SuccessResponse<>(response);
    }

    @PutMapping("{id}")
    public GenericResponse<CityModel> updateCity(@PathVariable Long id, @RequestBody CityModel city) {
        CityModel response = service.updateCity(id, city);
        return new SuccessResponse<>(response);
    }
}
