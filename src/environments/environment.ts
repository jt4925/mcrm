// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// for staging environment
// export const environment = {
//   production: false,
//   api_base_url: '//18.117.7.252:9000'

// };


export const environment = {
  production: false,
  api_url: 'http://localhost:5000',
  // api_url: 'http://18.117.7.252:9000' for staging
};


// function getApiUrl(){

//   if(environment.production){
//     return environment.api_prod_url
//   }
//   else{
//     return environment.api_stg_url
//   }

// }
