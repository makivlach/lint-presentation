Poznámky
==========

Common Lint chyby:
===================

* JS - Console.log() leakne do produkce a potencionálně exposne chování aplikace
* React - referencování předchozího statu a tím pádem i řešení race condition
* Používání unikátního key - špatně: https://codepen.io/pen?&editors=0010&layout=left; dobře: https://codepen.io/pen?&editors=0010&layout=left 

Prezentace:
============

1. Představit se
2. Téma - Proč vás lintování zachrání před naštvanou manželkou
3. Krátká teorie - co to je linter a jak vzniknul?
4. Jít do onlingu, checkoutnout se na starou verzi a ukázat rozdíl mezi starou verzí a fixnutou
5. Ukázat konfigurák `.eslintrc.json`
6. Ukázat i linter v Rustu
7. Jít do tohodle projektu a ukázat, že lintery neopravují coding style, ale i předcházejí bugům
8. Ukázat common pitfalls: 
   1. JS - Console.log() leakne do produkce a potencionálně exposne chování aplikace
   2. React - referencování předchozího statu a tím pádem i řešení race condition
   3. Používání unikátního key - špatně: https://codepen.io/pen?&editors=0010&layout=left; dobře: https://codepen.io/pen?&editors=0010&layout=left
9. Napsat si vlastní pravidlo
10. Nastavit si lint fix před commitem
11. Závěr -
    11. Odpověď na otázku - Proč vás lintování zachrání před naštvanou manželkou
    12. Umožňuje vám mít doma pořádek, vyčistí nepoužívaný kód a vymete brouky, ALE ZEJMÉNA....
    12. UŠETŘÍ VÁM TO PROBLÉMY
    14. Proto neotálejte a lintujte! Konec