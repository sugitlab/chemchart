# ChemChart

hogehoge

## Developer

### Build ChemChart

```shell
cd chemchart
npm version patch(minor/major)
git push origin tags/v.x.x.x
npm publish ./
```

### Watch Mode

```shell
cd chemchart
npm run build:watch
cd ../example
npm run dev
```

Then, any updates on chemchart code will directry apply to the example app.
