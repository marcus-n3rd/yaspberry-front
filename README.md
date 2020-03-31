# Yet Another Serverless Project Boilerplate (Front-End)

## Installation

```sh
git clone https://github.com/marcus-n3rd/yaspberry-front.git
cd yaspberry-front
npm ci
```

Ensure you have an AWS profile set up similar to:

```sh
[personal]
aws_access_key_id = 6iBB3r!sh
aws_secret_access_key = m023/6iBB3r!sh
```

## Usage

To package and deploy to your personal stack:

```sh
npm run deploy -- --aws-profile personal --stage <your-fist-name>
```

_Note: if react-scripts complains about a higher version of babel-jest, then add the following to a `.env` file:_

```sh
SKIP_PREFLIGHT_CHECK=true
```

## Testing

### Unit Tests

**_NOT IMPLEMENTED_**

```sh
npm test
```

### Functional/Integration Tests

**_NOT IMPLEMENTED_**

```sh
npm run deploy -- --aws-profile personal --stage <your-fist-name>
STAGE=<your-first-name> AWS_PROFILE=personal AWS_REGION=us-west-2 npm run test:int
```

## CI/CD

For packaging:

```sh
npm run package -- --stage dev
npm run package -- --stage staging
npm run package -- --stage prod
```

For deployment:

```sh
npm run deploy:packaged -- --aws-profile <project-account-specific-profile> --stage dev
npm run deploy:packaged -- --aws-profile <project-account-specific-profile> --stage staging
npm run deploy:packaged -- --aws-profile <project-production-account-specific-profile> --stage prod
```

## Team Development

For this service and its siblings, it should be assumed that environment is same across all,
so that they all can work in unison, whether it is deployed in production, dev, or for a developer's feature branch.
Therefore, it is highly suggested that "setting up a developer's local environment" means deploying the current master
of all services, including this one, that relate to the project using developer's name as the stage. E.g.,

```sh
cd ~/Projects/someProject/
cd ./front-end-service/
npm run deploy -- --aws-profile <project-account-specific-profile> --stage marcus
cd ../that-service/
npm run deploy -- --aws-profile <project-account-specific-profile> --stage marcus
```

### Advanced Testing

This means that testing can be fairly easy. For instance, a QE named 'awesome' can test a feature branch for a service like so:

```sh
cd ~/Projects/someProject/
cd ./some-service/
git checkout master
git pull
npm run deploy -- --aws-profile project-dev --stage awesome
cd ../that-service/
git checkout master
git pull
npm run deploy -- --aws-profile project-dev --stage awesome
cd ../front-end-service/
git checkout master
npm run deploy -- --aws-profile project-dev --stage awesome
```

## Rundowns

### Folder Structure

* `/devops`
  * `/aws-sdk`
    * Utilities to query or manipulate AWS resources
    * So far, NOT USED
  * `/jest`
    * Configurations for testing
    * So far, NOT USED
* `/src`
  * Source code... whatever... could be Vue...
* `/test`
  * Integration or functional tests... another whatever...

### Roadmap

* I'm thinkin' here

### Node Packages

Please, please, please keep track of these.

### Source Code Packages

* `axios`: for authorization

### Serverless Framework Pacakges

* `serverless`
* `serverless-finch`

### React Compiling Packages

* `react`
* `react-dom`
* `react-scripts`
* `sass`
* `node-sass`
* `fibers`

### Testing Packages

* `jest`: primary testing framework
* `jest-junit`: for unit testing
* `jest-stare`: I dunno, reporting or something?
* `babel-jest`: for running ES6 scripts
* `@babel/core`: for running ES6 scripts
* `@babel/plugin-transform-modules-commonjs`: for running ES6 scripts
* `supertest`: for calling API endpoints
* `bufferutil`: a required peer for a jest dependency
* `canvas`: a required peer for a jest dependency
* `utf-8-validate`: a required peer for a jest dependency
