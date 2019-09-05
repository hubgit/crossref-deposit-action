# crossref-deposit-action

GitHub Action for depositing JATS XML to Crossref

# Usage

```yaml
  - name: Crossref Deposit
    uses: hubgit/crossref-deposit-action
    with:
      input: article/manuscript.xml
      username: ${{ secrets.crossref_username }}
      password: ${{ secrets.crossref_password }}
```
