package com.joaov.helmes.api;

public class SuccessResponse <T> extends GenericResponse <T>{
    public SuccessResponse(T response) {
        super.response = response;
        super.success = true;
        super.error = null;
    }
}
