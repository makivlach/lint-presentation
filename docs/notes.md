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
    1. Otázka - Co mají společného zvířátka a lintování?
2. Krátká teorie - co to je linter a jak vzniknul?
3. Jít do onlingu, checkoutnout se na starou verzi a ukázat rozdíl mezi starou verzí a fixnutou
4. Ukázat konfigurák
5. Ukázat i linter v Rustu
6. Jít do tohodle projektu a ukázat, že lintery neopravují coding style, ale i předcházejí bugům
7. Ukázat common pitfalls: 
   1. JS - Console.log() leakne do produkce a potencionálně exposne chování aplikace
   2. React - referencování předchozího statu a tím pádem i řešení race condition
   3. Používání unikátního key - špatně: https://codepen.io/pen?&editors=0010&layout=left; dobře: https://codepen.io/pen?&editors=0010&layout=left
8. Napsat si vlastní pravidlo
9. Nastavit si lint fix před commitem
10. Závěr -
    11. zvířátka si odstraňují špínu, parazity, odumřelou kůži - ačkoliv se může zdát zbytečné, tak je důležité pro zdraví 
    12. Podobně i vývojáři čistí špínu z jejich kódu od nepoužitého kódu, nedosahnutélného kódu nebo nekonzistentího formátování
    13. Tím vývojáři zajišťují čistější, lépe pochopitelný kód a zdravou aplikaci
    14. Proto neotálejte a lintujte!