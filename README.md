About
=======

Projekt vzniknul pro potřeby prezentace o lintování. Jde o monorepo , které v adresáři "packages" obsahuje package:

* eslint-plugin-onling-lint
* react

Projekt dále obsahuje import aliasy, aby se nemusely používat relativní importy

## eslint-plugin-onling-lint

Je package, který obsahuje konfiguraci a deklaraci vlastních pravidel pro eslint. Je nastavený s typescriptem a každé
lint pravidlo
obsahuje i unit test k němu příslušný se suffixem `.test.ts`

## react

Je package s dummy aplikací, které ukazuje nastínění různých situací, které jsou fixovatelné, nebo upozorňovatelné
pomocí lintu a zohledňuje také vlastní pravidla

Instalace
==========

1. `yarn install`

Použití
=========

1. `yarn lint`

out of the box by mi měl ukázat (prozatím) jeden warning: `"fetching" or "isFetching" should be named "isLoading`

Jak napsat vlastní pravidlo
=============================

1. V `packages/eslint-plugin-onling-lint/src/rules` si vytvořím soubor s
   pravidlem (mohu zkopírovat již vytvořené a jen přejmenovat).
2. V `packages/eslint-plugin-onling-lint/src/index.ts` ho importnu a dám mu nějaký název
3. V rootu repozitáře v souboru: `.eslintrc.json` si přidám pravidlo i se zvoleným jménem pro pravidlo.
   Například: `"onling-lint/suggest-is-loading-instead-fetching": "warn"`