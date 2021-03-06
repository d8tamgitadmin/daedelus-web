import {
    AUTH_HEADERS,
    API_SERVER
} from "./constants";
import oktaAuth from "../okta";


export const POST_SCHEMA = {
    'method': 'POST',
    'route': `${API_SERVER}/api/v1/kyc/schmea`
}

export const GET_ALL_SCHEMAS = {
    'method': 'GET',
    'route': (accountId) => `${API_SERVER}/api/v1/kyc/schmea/${accountId}`
}

export const PUT_SCHEMA = {
    'method': 'PUT',
    'route': `${API_SERVER}/api/v1/kyc/schmea`
};

export const DELETE_SCHEMA = {
    'method': 'DELETE',
    'route':(id) =>  `${API_SERVER}/api/v1/kyc/schmea/${id}`
  };

export const GET_SCHEMA_DEFINITIONS = {
    'method':"GET",
    'route':(id) => `${API_SERVER}/api/v1/kyc/schemadefinition/${id}`
}

export const POST_SCHEMA_DEFINITION = {
    'method': 'POST',
    'route': `${API_SERVER}/api/v1/kyc/schemadefinition`
}

export const PUT_SCHEMA_DEFINITION = {
    'method': 'PUT',
    'route': `${API_SERVER}/api/v1/kyc/schemadefinition`
}

export const GET_CRED_OFFERS = {
    'method':"GET",
    'route':(id) => `${API_SERVER}/api/v1/credentialoffers/${id}`
}

export const POST_CRED_OFFER = {
    'method': 'POST',
    'route': `${API_SERVER}/api/v1/credentialoffers`
}
export const PUT_CRED_OFFER = {
    'method': 'PUT',
    'route': `${API_SERVER}/api/v1/credentialoffers`
}

export const DELETE_CRED_OFFER = {
    'method':"DELETE",
    'route':(id) => `${API_SERVER}/api/v1/credentialoffers/${id}`
}


export async function CreateSchema(schema){
    let token = await oktaAuth.getAccessToken();
    
    return fetch(POST_SCHEMA.route, {
        method: POST_SCHEMA.method,
        withCredentials: true,
        mode:'cors',
        credentials:'include',
        headers: AUTH_HEADERS(token),
        body: JSON.stringify(schema)
    });
};

export async function GetAllSchemas(accountId) {
    let token = await oktaAuth.getAccessToken();

   return fetch(GET_ALL_SCHEMAS.route(accountId), {
        method: GET_ALL_SCHEMAS.method,
        withCredentials: true,
        mode: 'cors',
        credentials: 'include',
        headers: AUTH_HEADERS(token)
      })
};

export async function PutSchema(schema) {
    let token = await oktaAuth.getAccessToken();

   return fetch(PUT_SCHEMA.route, {
        method: PUT_SCHEMA.method,
        withCredentials: true,
        mode: 'cors',
        credentials: 'include',
        headers: AUTH_HEADERS(token),
        body: JSON.stringify(schema)
      })
};

export async function GetKycSchemaDefinitions(accountId){
    let token = await oktaAuth.getAccessToken();

   return fetch(GET_SCHEMA_DEFINITIONS.route(accountId), {
        method: GET_SCHEMA_DEFINITIONS.method,
        withCredentials: true,
        mode: 'cors',
        credentials: 'include',
        headers: AUTH_HEADERS(token)
      })
};

export async function PostKycSchemaDefinition(schemaDefinition){
    let token = await oktaAuth.getAccessToken();
    
    return fetch(POST_SCHEMA_DEFINITION.route, {
        method: POST_SCHEMA_DEFINITION.method,
        withCredentials: true,
        mode:'cors',
        credentials:'include',
        headers: AUTH_HEADERS(token),
        body: JSON.stringify(schemaDefinition)
    });
};

export async function PutSchemaDefinition(schemaDefinition) {
    let token = await oktaAuth.getAccessToken();

   return fetch(PUT_SCHEMA_DEFINITION.route, {
        method: PUT_SCHEMA_DEFINITION.method,
        withCredentials: true,
        mode: 'cors',
        credentials: 'include',
        headers: AUTH_HEADERS(token),
        body: JSON.stringify(schemaDefinition)
      })
};

export async function GetCredentialOffers(accountId){
    let token = await oktaAuth.getAccessToken();

   return fetch(GET_CRED_OFFERS.route(accountId), {
        method: GET_CRED_OFFERS.method,
        withCredentials: true,
        mode: 'cors',
        credentials: 'include',
        headers: AUTH_HEADERS(token)
      })
};

export async function PostCredentialOffer(credOffer){
    let token = await oktaAuth.getAccessToken();
    
    return fetch(POST_CRED_OFFER.route, {
        method: POST_CRED_OFFER.method,
        withCredentials: true,
        mode:'cors',
        credentials:'include',
        headers: AUTH_HEADERS(token),
        body: JSON.stringify(credOffer)
    });
};

export async function PutCredentialOffer(credOffer){
    let token = await oktaAuth.getAccessToken();
    
    return fetch(PUT_CRED_OFFER.route, {
        method: PUT_CRED_OFFER.method,
        withCredentials: true,
        mode:'cors',
        credentials:'include',
        headers: AUTH_HEADERS(token),
        body: JSON.stringify(credOffer)
    });
};

export async function DeleteCredentialOffer(credOfferId) {
    let token = await oktaAuth.getAccessToken();

    return fetch(DELETE_CRED_OFFER.route(credOfferId), {
        method: DELETE_CRED_OFFER.method,
        withCredentials: true,
        mode:'cors',
        credentials:'include',
        headers: AUTH_HEADERS(token)
    });
}


