# Restore Closed Tabs WebExtension

| Category      | Measurement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pipeline      | [![CircleCI](https://img.shields.io/circleci/project/github/ayltai/restore-closed-tabs-webextension/master.svg?style=flat)](https://circleci.com/gh/ayltai/restore-closed-tabs-webextension)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Quality       | [![Code Quality](https://img.shields.io/codacy/grade/0bbc69ed0dc9453fb0669a3da4f09e37.svg?style=flat)](https://app.codacy.com/app/AlanTai/restore-closed-tabs-webextension/dashboard) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/ayltai_restore-closed-tabs-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension) [![Sonar Violations (short format)](https://img.shields.io/sonar/violations/ayltai_restore-closed-tabs-webextension?format=short&server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension)                 |
| Coverage      | [![Code Coverage](https://img.shields.io/codecov/c/github/ayltai/restore-closed-tabs-webextension.svg?style=flat)](https://codecov.io/gh/ayltai/restore-closed-tabs-webextension) [![Sonar Coverage](https://img.shields.io/sonar/coverage/ayltai_restore-closed-tabs-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension)                                                                                                                                                                                                                                                                               |
| Rating        | [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_restore-closed-tabs-webextension&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_restore-closed-tabs-webextension&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension) [![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/ayltai_restore-closed-tabs-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension) |
| Security      | [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_restore-closed-tabs-webextension&metric=security_rating)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ayltai_restore-closed-tabs-webextension&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ayltai_restore-closed-tabs-webextension)                                                                                                                                                                                                                               |
| Miscellaneous | ![Maintenance](https://img.shields.io/maintenance/yes/2020) [![Release](https://img.shields.io/github/release/ayltai/restore-closed-tabs-webextension.svg?style=flat)](https://github.com/ayltai/restore-closed-tabs-webextension/releases) [![License](https://img.shields.io/github/license/ayltai/restore-closed-tabs-webextension.svg?style=flat)](https://github.com/ayltai/restore-closed-tabs-webextension/blob/master/LICENSE)                                                                                                                                                                                                                                            |

A Firefox/Chrome/Edge extension that provides a reliable way to restore closed tabs. Never lost a tab again!

Available at: https://addons.mozilla.org/addon/restore-closed-tabs/

![Screenshot 1](design/screenshot-1.png)

![Screenshot 2](design/screenshot-2.png)

## Features
* Shows a list of recently closed tabs
* Restores recently closed tabs via a toolbar button
* Customizes the number of recently closed tabs to show

## Getting started

### Install
1. Install [NodeJS](https://nodejs.org)
2. Install dependencies
   ```sh
   npm i -D
   ```

### Build
```sh
npm run build
```

### Run
```sh
npm start
```

## Acknowledgements
This software is made with the support of open source projects:
* [NodeJS](https://nodejs.org)
* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebook/create-react-app)
* [Material UI](https://material-ui.com)
* [ESLint](https://eslint.org)
* [Stylelint](https://stylelint.io)
* [Enzyme](https://airbnb.io/enzyme)
* [web-ext](https://github.com/mozilla/web-ext)

... and closed source services:
* [CircleCI](https://circleci.com)
* [SonarCloud](https://sonarcloud.io)
