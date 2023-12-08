import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

// сделано для временного удобства (чтобы TypeScript не ругался)
// по-хорошему этот интерфейс нужно импортировать из соответствующего компонента
interface ICardProps {
    [K: string]: any
}

export const DATA_REQUEST = 'DATA_REQUEST'
export const DATA_REQUEST_SUCCESS = 'DATA_REQUEST_SUCCESS'
export const DATA_REQUEST_ERROR = 'DATA_REQUEST_ERROR'
export const DATA_DELETE_ITEM = 'DATA_DELETE_ITEM'
export const DATA_LIKE_ITEM = 'DATA_LIKE_ITEM'

export type DataRequestAction = {
    type: typeof DATA_REQUEST
}
export type DataRequestSuccessAction = {
    type: typeof DATA_REQUEST_SUCCESS
    data: ICardProps[]
}
export type DataRequestErrorAction = {
    type: typeof DATA_REQUEST_ERROR
    error: string
}
export type DataDeleteItemAction = {
    type: typeof DATA_DELETE_ITEM
    id: string
}
export type DataLikeItemAction = {
    type: typeof DATA_LIKE_ITEM
    id: string
    liked: boolean
}

export const dataRequest: ActionCreator<DataRequestAction> = () => ({
    type: DATA_REQUEST
})
export const dataRequestSuccess: ActionCreator<DataRequestSuccessAction> = (data:ICardProps[]) => ({
    type: DATA_REQUEST_SUCCESS,
    data
})
export const dataRequestError: ActionCreator<DataRequestErrorAction> = (error: string) => ({
    type: DATA_REQUEST_ERROR,
    error
})
export const dataDeleteItem: ActionCreator<DataDeleteItemAction> = (id: string) => ({
    type: DATA_DELETE_ITEM,
    id
})
export const dataLikeItem: ActionCreator<DataLikeItemAction> = (id: string, liked: boolean) => ({
    type: DATA_LIKE_ITEM,
    id,
    liked
})

interface IPostData {
    id: string
    title: string
    url: string
    liked: boolean
}

/*
NASA Open APIs
    API key: GEXp8ctenXN78wefPUiNehDHWuX2XCfyRzom2cRj
    https://api.nasa.gov (внизу этой страницы описывается все что можно достать)
    https://api.nasa.gov/planetary/apod?api_key=GEXp8ctenXN78wefPUiNehDHWuX2XCfyRzom2cRj
    https://api.nasa.gov/EPIC/api/natural/images?api_key=GEXp8ctenXN78wefPUiNehDHWuX2XCfyRzom2cRj
unsplash
    https://unsplash.com/documentation#get-a-random-photo
    Access Key: nYnWaFyV-Ix4eRCbJjYdVTpsTubIEDyumthkmB6TRjA
    Secret key: jtUUpb-Ct0RMS_ReOL0XXbTJT63hS1mpDsUT5aDdHq4
    https://api.unsplash.com/photos/random?count=30&client_id=nYnWaFyV-Ix4eRCbJjYdVTpsTubIEDyumthkmB6TRjA
*/

export const dataRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    dispatch(dataRequest())
    axios
        .get(`https://oauth.reddit.com/new/`, {headers: {Authorization: `bearer ${localStorage.getItem('token')}`}})
        .then(({ data }) => {
            const postsList = data?.data?.children
            const itemsToRedux = postsList.map(({ data }: { [x: string]: any }): IPostData | null => {
                if (data['is_video']) return null
                return {
                    id: data['id'],
                    title: data['title'],
                    url: data['url'],
                    liked: false
                }
            })
            .filter((post: IPostData | null) => post !== null)
            dispatch(dataRequestSuccess(itemsToRedux))
        })
        .catch((error) => {
            dispatch(dataRequestError(String(error)))
            localStorage.setItem('token', 'undefined')
        })
}