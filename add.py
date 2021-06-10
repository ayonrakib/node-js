a = 10
b = 20

c = a + b

# ei tin line run korar process:

# 1. a = 10 read and compile korlo
# 2. a naam ekta variable banao and a er moddhe intermediate value 10 boshao 
# eita ekhono run kore nai
# 3. 3 number step e giye ei assembly code gula execute korbe and RAM e var er address e int value ta boshabe
# 4. b er line e same kaaj korbe
# 5. c er line e:

# compiler-> eksathe pura jinish translate kore
# interpreter-> shudhu matro jei line e ase shei line tai translate korbe

# orthat, C te 100 line likhle pura ta mile ekta executable banabe assembly te and execution korbe
# ekbar executable banaile oita hajar bar execute kora jabe WITHOUT COMPILING
# kintu python e likhle per line ekvbar kore compile korbe and executable banabe and execute korbe
# erporer line o same-compile korbe executable banabe and execute korbe
# ei karon python slow
# optimize korar jonno kisu jinish banaise-just in time compiler
# flask er app run kora rjonno-kisu kisu jinish cache-aage jei executable banaisilam oita cache kora thake so jeno abar compile kora na laage
# python theke ekta intermediate language banay semi assembly, compile time kome ashe-just in time compiler
# ora jei executable code banay oita pseudo assembly
# oigula sorasori pc te chalano jabe na, arekta software-VM-intermediate language execute kore

# app kivabe run kore?
# million var instruction set e ase, RAM e nai. run korar pore RAM e jabe.
# app jokhon run kori-
# 1. address space-virtual memory er moton. address space e sob var create kore. compile korlam-assembly lang to var er naam bujhe na
# a var er jaygay address likha lagbe-a=10 likhar jaygay 'mov x1234, 10' erokom code likhe
# so or kase a naam e var nai. so ami to run korar aage janbo na memory er kothay faka ase
# memory er kothay faka ase eita ami chalanor aage ter pabo na. jokhon compile korte hobe tokhon assembly te var nai, address lagbe
# oi address ta ke bole relative address - x1234 ta hoilo relative address, kar relative?
# theory of address space-proti ta app er address space shuru hoy 0 space theke
# x1234 mane hoilo 0 er relative e x1234 address
# jokhon run kori-actual memory x1234 e onno kisu thakte paare. so mapping kore-virtual memory er sathe real RAM er sathe
# ppt te dekhaisi a and b kivabe mapping kortese
# dynamically hoite thaake run time e, karon RAM dynamic.jayga khali hoile onno kotha allocate korbe
