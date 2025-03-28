---
sidebar_position: 1
title: Create Pull Request
description: How to create pull request
---

# How to Create a Pull Request

Thank you for your interest in contributing to the Ocelot project! Follow the steps below to ensure your pull request (PR) can be reviewed and merged smoothly.

## 1. Fork and Clone the Repository

First, fork the [Ocelot GitHub repository](https://github.com/ocelot-collab/ocelot) and clone it to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/ocelot.git
cd ocelot
```

## 2. Create a New Branch

Always base your changes on the `dev` branch. Create a new branch for your changes:

```bash
git checkout dev
git pull origin dev
git checkout -b my-feature-branch
```

## 3. Make Your Changes

Make the necessary changes in the code. Please follow the existing coding style and structure.

## 4. Run Unit Tests

Before submitting your PR, make sure that all unit tests pass. You can run the tests using:

```bash
python -m pytest unit_tests
```
See successful example of unit test passage:

<a href="/img/how_to/unit_test.png" target="_blank">
  <img src="/img/how_to/unit_test.png" alt="Unit test success" style={{ width: '200px' }} />
</a>

:::warning
If you add new functionality, make sure to include unit tests for it. Check the next [chapter](unit_test.md) to see how it's done.
:::

## 5. Add Documentation

Update or add docstrings for any new functions or changes. If you're adding a new feature, provide a clear usage example in the docstring.

## 6. Commit and Push Your Changes

```bash
git add .
git commit -m "Add feature X to match function"
git push origin my-feature-branch
```

## 7. Open a Pull Request

Go to the GitHub page of your fork and click the **Compare & pull request** button.

- **Important**: Set the base branch of the PR to `dev`, **not** `main`.
- Provide a clear description of the changes you made.

## 8. PR Review

A maintainer will review your PR. Please be ready to:
- Confirm that unit tests pass.
- Add or update documentation.
- Add unit tests for the specific case you implemented.

If you have any questions or need help during the process, feel free to reach out!

---

Thanks for contributing to Ocelot!

Cheers,  
**Sergey**

