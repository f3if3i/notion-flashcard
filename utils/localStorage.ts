import { DBInfoType } from "../types/database"

export const FC_LOCAL_STORAGE = "notionFlashcardDatabaseList"

export const updateLocalStorage = (db: DBInfoType) => {
    if (!isDBExisted(db.id)) {
        const dbList = JSON.parse(localStorage.getItem(FC_LOCAL_STORAGE) || "[]")
        if (dbList.length > 6) {
            dbList.shift()
        }
        dbList.push(db)
        localStorage.setItem(FC_LOCAL_STORAGE, JSON.stringify(dbList))
        return dbList
    }

}

export const isDBExisted = (id: string) => {
    if (localStorage.hasOwnProperty(FC_LOCAL_STORAGE)) {
        const dbList = JSON.parse(localStorage.getItem(FC_LOCAL_STORAGE) || "[]")
        const isFound = dbList.some((element: DBInfoType) => {
            if (element.id === id) {
                return true
            } 
            return false
        }) 
        return isFound
    } else {
        localStorageInit(FC_LOCAL_STORAGE)
    }
}

export const localStorageInit = (localStorageName: string) => {
    if (!localStorage.hasOwnProperty(localStorageName)) {
        localStorage.setItem(localStorageName, JSON.stringify([]))
    }
}