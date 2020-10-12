// Какой файл первее был подключен - именно от туда и будет вывод, в данном примере - с этого файла
// import './script1.js'





// Получает объект admin и меняет его поле name на Kravich

import {admin} from './script1.js'
admin.name = "Kravich"





// Во втором файле установил kravich.name = "Vlad" и таким образом в модуле script1.js лежит изменный объект с нужным полем

import {kravich} from './script1.js'
kravich.name = "Vlad"