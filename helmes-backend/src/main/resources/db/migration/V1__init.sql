drop table if exists city;

create table city(
     id int8 not null,
     name varchar not null,
     photo varchar not null,
     primary key (id)
);

copy city(id, name, photo)
from ${citiesCsv} delimiter ',' csv header;
