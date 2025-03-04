# fs_fioriApp

## Istruzioni per l'Installazione

Eseguire il seguente comando nelle seguenti directory:

```sh
npm install
```

- **fs-guide** (frontend)
- **my-cap-app**

## Configurazione e Deploy

All'interno della cartella **my-cap-app**, eseguire:

```sh
cds build
cds deploy --to sqlite
npx cds deploy --to sqlite:bookshop.db


