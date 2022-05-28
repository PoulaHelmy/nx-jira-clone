# Semantic commit messages

See how a minor change to your commit message style can make you a better programmer.

## Commit message format

```
<type>[(<scope>)]: <emoji> <subject>
[BLANK LINE]
[body]
[BLANK LINE]
[breaking changes]
[BLANK LINE]
[footer]
```

## Example

```
feat(configs): 🎸 install code quailty tools
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

Reference:

- https://seesparkbox.com/foundry/semantic_commit_messages
- https://openbase.com/js/git-cz/documentation
- https://bitspeicher.blog/how-to-be-a-good-commitizen/
- https://www.npmjs.com/package/git-cz
- https://gitmoji.dev/
- https://commitlint.js.org/#/reference-rules
- https://dev.to/sohandutta/make-everyone-in-your-project-write-beautiful-commit-messages-using-commitlint-and-commitizen-1amn
