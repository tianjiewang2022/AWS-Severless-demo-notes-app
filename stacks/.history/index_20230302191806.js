import { Tags } from "aws-cdk-lib";

export default function main(app) {
    Tags.of(app).add("my-tag", `${app.stage}-${app.region}`);
}