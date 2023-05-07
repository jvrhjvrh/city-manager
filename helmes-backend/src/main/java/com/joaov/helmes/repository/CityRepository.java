package com.joaov.helmes.repository;

import com.joaov.helmes.model.CityModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("city")
public interface CityRepository extends ListCrudRepository<CityModel, Long> {
    @Query("SELECT c from CityModel c where (:name is null or c.name = :name)")
    List<CityModel> findAllByName(String name);
}
