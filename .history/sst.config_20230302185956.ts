import { SSTConfig } from "sst";
import { Database } from "./stacks/Database"
import { Web } from "./stacks/Web"
import { Api } from "./stacks/Api"

export default {
  config(_input) {
    return {
      name: "my-sst-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
      .stack(Database)
      .stack(Api)
      .stack(Web)
  },
} satisfies SSTConfig;
