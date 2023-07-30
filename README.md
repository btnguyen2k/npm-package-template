# npm-package-template
Template to quickly spin up a NPM package project.

## Features

- Build project with `babel`.
- Check project files with `eslint`.
- Test project with `jest`.
- GitHub Actions for CI/CD:
  - Run tests and coverage on every push/PR.
  - Auto update project dependencies with `dependabot`.
  - Auto merge PRs created by `dependabot`.
  - Auto release project with `semantic-release`.

## History

### 2023-07-30 - v0.2.0

- GitHub Actions for CI/CD:
  - Run tests and coverage on every push/PR.
  - Auto update project dependencies with `dependabot`.
  - Auto merge PRs created by `dependabot`.
  - Auto release project with `semantic-release`.
- Sample README and RELEASE-NOTES files.

### 2023-07-17 - v0.1.0

- Build project with `babel`
- Check project files with `eslint`
- Test project with `jest`

## Checklist

- [ ] `package.json`: update package info (name, description, git repo, author, license, etc.) (hint: search for string `<changeme>`)
- [ ] `jest.config.js`:
  - review & update `coverageThreshold` section.
  - review & update `transformIgnorePatterns` section.
- [ ] `.github/dependabot.yml` review & update dependabot auto update rules.
- [ ] review & update GitHub actions under `.github/workflows` folders.
- [ ] `RELEASE-NOTES.md`: review & update release notes.
- [ ] `LICENSE.md`: review & update license file.
- [ ] `README.md`: review & update README file.
- [ ] start coding.

> An example of README file is provided below. You can use it as a starting point for your own README file.
>
> Once you finish the checklist, you can remove this section from the README file.

# `<changeme>`

My awesome NPM package.

## Installation

**with npm**

```shell
$ npm install -S @btnguyen2k/<changeme>
```

## Usage

```javascript
import {sayHello} from '@btnguyen2k/<changeme>'

sayHello('World')
```

## License

MIT - see [LICENSE.md](LICENSE.md).
