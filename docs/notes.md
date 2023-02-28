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
3. Krátká teorie - co to je lintování a jak vzniknulo?
4. Ukázat common pitfalls:
    1. JS - Console.log() leakne do produkce a potencionálně exposne chování aplikace
    2. React - referencování předchozího statu a tím pádem i řešení race condition
    3. Používání unikátního key - špatně: https://reactjs.org/redirect-to-codepen/reconciliation/index-used-as-key;
       dobře: https://reactjs.org/redirect-to-codepen/reconciliation/no-index-used-as-key
5. (Z prezentace) Jít do onlingu, checkoutnout se na starou verzi a ukázat rozdíl mezi starou verzí a fixnutou
6. Ukázat konfigurák `.eslintrc.json`
7. Ukázat i linter v jiném jazyce (Rust)
8. Jít do tohodle projektu a ukázat, že lintery neopravují jen coding style, ale i předcházejí bugům
9. (Pokračovat v prezentaci) Napsat si vlastní pravidlo - místo `fetching` nebo `isFetching` dát `isLoading`
10. Nastavit si lint fix před commitem
11. Závěr -
    11. Odpověď na otázku - Proč vás lintování zachrání před naštvanou manželkou
    12. Umožňuje vám mít doma pořádek, vyčistí nepoužívaný kód a vymete brouky, ALE ZEJMÉNA....
    12. UŠETŘÍ VÁM TO PROBLÉMY
    14. Proto neotálejte a lintujte! Konec