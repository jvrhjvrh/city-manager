package com.joaov.helmes.api;

public class ErrorResponse <T> extends GenericResponse <T> {
    public ErrorResponse(String error) {
        super.success = false;
        super.error = error;
        super.response = null;
    }
}
