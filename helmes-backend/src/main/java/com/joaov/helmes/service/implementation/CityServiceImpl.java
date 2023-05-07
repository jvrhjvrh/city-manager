package com.joaov.helmes.service.implementation;

import com.joaov.helmes.model.CityModel;
import com.joaov.helmes.repository.CityRepository;
import com.joaov.helmes.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    CityRepository repository;

    @Autowired
    public CityServiceImpl(CityRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<CityModel> getAllCities(String name) {
        return repository.findAllByName(name);
    }

    @Override
    public CityModel updateCity(Long id, CityModel city) {
        CityModel model = repository.findById(id).orElseThrow();
        model.updateModel(city);
        return repository.save(model);
    }
}
