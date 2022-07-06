import React from "react";

export const appCtx = React.createContext();
export const AppProvider = appCtx.Provider;

export const companyCtx = React.createContext();
export const CompanyProvider = companyCtx.Provider;

export const reportCtx = React.createContext();
export const ReportProvider = reportCtx.Provider;

export const tokenCtx = React.createContext();
export const TokenProvider = tokenCtx.Provider;
