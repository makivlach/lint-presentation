Poznámky
==========

Common Lint chyby:
===================

* JS - Console.log() leakne do produkce a potencionálně exposne chování aplikace
* React - referencování předchozího statu a tím pádem i řešení race condition
* Používání unikátního key - špatně: https://codepen.io/pen?&editors=0010&layout=left; dobře: https://codepen.io/pen?&editors=0010&layout=left 