# VSCode in-IDE Code Auto-complete

## Installation Instructions

- Setup your OpenAI API Key https://platform.openai.com/account/api-keys
    + Paste the key into the plugin const and build the plugin (for now)
    + A future enhancement will be made where you can configure VSCode to
    read your OpenAI API token via a workspace setting. Due to time constraints
    this was left as a future enhancement.
- Build and install the extension into VSCode

## Plugin Usage

- Open up your programming project in VSCode with the auto complete plugin installed.
- Bring up the command prompt via <Cmd+Shift+p> and start the plugin with `Say ChatGPT`
- Follow the prompt and ask it to generate some code for your project
- Copy and paste the resulting code into your VSCode IDE

## Publishing

I have provided a way for this GitHub repository to automatically publish
this VSCode extension for any git tag pushes. This means when ready to release,
a repository maintainer can tag a commit, and push that tag to GitHub which will
trigger a GitHub action to do an automated release.

## Linting

This repository will automatically lint TypeScript on Pull Requests and Pushes via
a configured GitHub Action script. This will help enforce coding standards for
those contributing to this repo.

### Authors Note

Note that part of this plugins code was generated with OpenAI. Use at your own
risk in production!
