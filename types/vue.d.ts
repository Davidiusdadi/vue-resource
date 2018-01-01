/**
 * Extends interfaces in Vue.js
 */

import Vue from "vue";
import { HttpHeaders, HttpOptions, HttpResponse, Http, $resource } from "./index";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    http?: (HttpOptions & { headers?: HttpHeaders } & { [key: string]: any })
  }
}

declare module "vue/types/vue" {
    interface Vue {
        $http: Http;
        $resource: $resource;
    }
}
