About
=======

Projekt vzniknul pro potřeby prezentace o lintování. Jde o monorepo , které v adresáři "packages" obsahuje package:

* eslint-plugin-onling-lint
* react

## eslint-plugin-onling-lint

Je package, který obsahuje konfiguraci a deklaraci vlastních pravidel pro eslint. Je nastavený s typescriptem a každé
lint pravidlo
obsahuje i unit test k němu příslušný se suffixem `.test.ts`

## react

Je package s dummy aplikací, které ukazuje nastínění různých situací, které jsou fixovatelné, nebo upozorňovatelné
pomocí lintu a zohledňuje také vlastní pravidla
