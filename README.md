# Next.js, Contentful & Storybook setup

### Table of Contents
[Prerequisites](#prerequisites)\
[Setting up the project](#setting-up-the-project)\
[Local environment](#local-environment)\
[Workflow](#workflow)\
[Basic setup](#basic-setup)\
[Deployment](#deployment)

## Prerequisites
The development OS of choice is **Mac OS** so you are required to install [Homebrew](https://brew.sh) to install:
* [Node](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/get-npm)

This project has been setup with [Next.js](https://nextjs.org/)

## Setting up the project
```bash
$ git clone git@github.com:Zanqeon/nextjs-contentful-storybook.git
$ cd nextjs-contentful-storybook
$ yarn install
```

## Local environment
```bash
$ yarn run watch
```


## Workflow
For this project we use GitFlow. An explanation can be found over [here](https://datasift.github.io/gitflow/IntroducingGitFlow.html).
This means that new features will be created from the *develop* branch.

With feature deployments, all features get their own link and can be checked by the client.
Once approved, they will be merged back into *develop*.

Once approved, the *develop* will be merged in *master*, which automatically deploys to *production*.

Hotfixes can be done straight on *master* and should be merged 

### Commit message
Commit messages will have the structure as explained over [here](http://karma-runner.github.io/5.0/dev/git-commit-msg.html).

example:
    
    feat(checkout): implement Formik and Yup for form logic
    
    Add the Formik and Yup dependency for easy use of forms.
    Add two examples of form implementations and a default form setup to easily create forms.
    
    Implements FFF-88


## Basic setup
This site has been set up with `NextJS` in combination with `Storybook`.

To keep the views separated from the logic, the following basic file structure is used:

```
src
 ├── assets             # All the assets
 ├── components         # All the reusable components
 ├── pages              # Page logic. This is where data is being gathered and processed.
 └── views
       ├── pages        # The actual view of the page. This is where the sections come together.
       └── sections     # All the reusable page sections
```

Each component folder has the same structural setup, looking like this:

```
<component>
    ├── index.js
    ├── index.stories.js
    └── index.module.scss
```

### NextJS
NextJS keeps a strict directory setup, with a specific way to build pages.
The root for NextJS in this project is `./src`. This keeps the source files and structure separated from for instance the different configurations.

### Styling
Styling in this project is done with Sass, combined with [css-modules](https://github.com/css-modules/css-modules). This means that every component has it's own styling file.

To still make use of the SASS variables, it is necessary to import the file that defines these variables within your module styling.
These variables will be defined in the `./assets/scss` folder, next to the base SASS file; `global.scss`.
This base file is used for resetting the browser styles and some other generic styles.

### Storybook
[Storybook](https://https://storybook.js.org/) is setup in the `.storybook` folder. To add a new item to storybook, add the following file called `index.stories.js` to a component folder:
```js
import React from 'react'
import $COMPONENT$ from './index'
import { withKnobs } from '@storybook/addon-knobs'

export default { 
  title: 'Components|$COMPONENT$',
  decorators: [withKnobs] 
}

export const Default = () => <$COMPONENT />
```
Make sure to replace `$COMPONENT$` with the default exported component name.

We use the [knobs addon](https://www.npmjs.com/package/@storybook/addon-knobs) in this project, which enables interaction with the components.

### Icons
Icons are handled differently. Instead of creating an iconfont we generate icon-components.
These still correspond to the normal styling we usually have.
For generating these files, we use [svgr](https://www.npmjs.com/package/@svgr/cli).
If there is a new icon, run the following command
```bash
$ yarn generate-icons
```
The icons components will automatically be created and placed in the `./src/components/icons` folder for all the icons in the `./assets/icons` folder.

For creating these files there is a template file `icon-index-template.js` which can be found in the scripts folder

The `icon-index-template.js` is used for creating the index file that exports all the icons.
