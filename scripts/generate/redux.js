const fs = require('fs')
const path = require('path')

// read mutation request files
const files = []

fs.readdirSync('submodules/EventCharm.GraphQLProxy/requests/mutations').forEach(filename => {
  const name = path.parse(filename).name
  const filepath = path.resolve('submodules/EventCharm.GraphQLProxy/requests/mutations', filename)
  const stat = fs.statSync(filepath)
  const isFile = stat.isFile()

  if (isFile) {
    const contents = fs.readFileSync(filepath, 'utf8')
    files.push({
      name,
      filepath,
      contents
    })
  }
})

// build array of actions with metadata derviced from name
const getCategoryTree = name => {
  const removeIndicies = (array, indicies) => array.filter((value, index) => indicies.indexOf(index) == -1)
  const sections = name.split('_')
  if (sections.length === 2) {
    return [sections[0]]
  }
  if (sections.length === 3) {
    return [sections[1]]
  } 
  if (sections.length === 4) {
    return [sections[1], sections[2]]
  }
  return removeIndicies(sections, [0, sections.length - 2, sections.length - 1])
}
const toLowerCaseFirstLetter = s => s[0].toLowerCase() + s.slice(1)

const actions = files.map(({ name }) => ({
  type: name.toUpperCase(),
  name,
  scope: name.split('_')[0],
  categoryTree: getCategoryTree(name),
  field: toLowerCaseFirstLetter(name.split('_')[name.split('_').length - 2]),
  operation: name.split('_')[name.split('_').length - 1],
}))


const insertGeneratedMessage = () => 
`// ***THIS FILE WAS AUTO-GENERATED. DO NOT MODIFY.***\r\n`

// actions
fs.writeFile(`redux/events/actions.ts`,
`${insertGeneratedMessage()}
${actions.map(({ name }) => `import { ${name}Variables } from 'submodules/EventCharm.GraphQLProxy/apollo/mutations/types/${name}'`).join("\r\n")}

export const SET_ACTIVE_EVENT_GUID = 'SET_ACTIVE_EVENT_GUID'
export const SET_EVENTS = 'SET_EVENTS'

export const ECEVENT_POSTERIMAGEURL_SET = 'ECEVENT_POSTERIMAGEURL_SET'

${actions.map(({ type }) => `export const ${type} = '${type}'`).join("\r\n")}

export interface SetActiveEventGuidAction {
  type: typeof SET_ACTIVE_EVENT_GUID,
  payload: string
}
export const setActiveEventGuid = (payload) : SetActiveEventGuidAction => ({
  type: SET_ACTIVE_EVENT_GUID,
  payload
})

export interface SetEventsAction {
  type: typeof SET_EVENTS,
  payload: any
}
export const setEvents = (payload) : SetEventsAction => ({
  type: SET_EVENTS,
  payload
})

export interface ecEvent_PosterImageUrl_Set_Action {
  type: typeof ECEVENT_POSTERIMAGEURL_SET,
  payload: {
    eventGuid: string,
    posterImageUrl: string
  }
}
export const ecEvent_PosterImageUrl_Set = (payload) : ecEvent_PosterImageUrl_Set_Action => ({
  type: ECEVENT_POSTERIMAGEURL_SET,
  payload
})

${actions.map(({ name, type }) => `
export interface ${name}_Action {
  type: typeof ${type},
  payload: ${name}Variables
}
export const ${name} = (payload) : ${name}_Action => ({
  type: ${type},
  payload
})`).join("\r\n")}

export type ActionTypes =
${actions.map(({ name, type }) => `${name}_Action |`).join("\r\n")}
SetActiveEventGuidAction |
SetEventsAction |
ecEvent_PosterImageUrl_Set_Action
`,err => { if (err) return console.log(err)}
)


// reducer
const generateActionReducerFunction = ({
  type,
  name,
  scope,
  categoryTree,
  field,
  operation
}) => {
  console.log(name, categoryTree)
  switch(scope) {
    case 'ecEvent':
      switch (operation) {
        case 'Create':
          if (categoryTree[0] === 'Capacity') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Series') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          return `
            case EventsActionTypes.${type}:
              const newEvent = {} as ecEvent_List_ByPerson_Get_ecEvent_List_ByPerson_Get_data 
              return {
                ...state,
                events: {
                  ...state.events,
                  [action.payload.eventGuid]: {
                    ...newEvent,
                    guid: action.payload.eventGuid
                  }
                }
              }
            `
        case 'Delete':
          if (categoryTree[0] === 'Series') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          return `
            case EventsActionTypes.${type}:
              const newEvents = state.events
              delete newEvents[action.payload.eventGuid]
              return {
                ...state,
                events: newEvents
              }
            `
        case 'Set':
          if (categoryTree[0] === 'Schedule') {
            if (categoryTree?.[1] === 'TimeZone') {
              return `
                case EventsActionTypes.${type}:
                  return {
                    ...state,
                    events: {
                      ...state.events,
                      [action.payload.eventGuid]: {
                        ...state.events[action.payload.eventGuid],
                        schedule: {
                          ...state.events[action.payload.eventGuid].schedule,
                          ${field}: {
                            value: action.payload.${field}.value,
                            type: action.payload.${field}.type
                          }
                        }
                      }
                    }
                  }`
            }
            
            if (categoryTree?.[1] === 'IsMultiDay') {
              return `
                case EventsActionTypes.${type}:
                  return {
                    ...state,
                    events: {
                      ...state.events,
                      [action.payload.eventGuid]: {
                        ...state.events[action.payload.eventGuid],
                        schedule: {
                          ...state.events[action.payload.eventGuid].schedule,
                          ${field}: {
                            value: action.payload.${field}.value,
                            type: action.payload.${field}.type
                          }
                        }
                      }
                    }
                  }`
            }
            if (categoryTree?.[1] === 'EventDays') {
              return `
                case EventsActionTypes.${type}:
                  return {
                    ...state,
                    events: {
                      ...state.events,
                      [action.payload.eventGuid]: {
                        ...state.events[action.payload.eventGuid],
                        schedule: {
                          ...state.events[action.payload.eventGuid].schedule,
                          eventDays: action.payload.eventDays
                        }
                      }
                    }
                  }`
            }
            
            if (categoryTree?.[1]) {
              return `
              // no code generated for EventsActionTypes.${type}`
            }
            return `
              case EventsActionTypes.${type}:
                return {
                  ...state,
                  events: {
                    ...state.events,
                    [action.payload.eventGuid]: {
                      ...state.events[action.payload.eventGuid],
                      schedule: action.payload
                    }
                  }
                }`
          }
          if (categoryTree[0] === 'ShowExactLocation') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Location') {
            if (categoryTree?.[1] === 'IsPhysicalLocation')
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'IsPublished') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'IsLiveMusic') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'AgeRestriction') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Positions') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'PrimaryHost') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'PosterImage') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'EnableAreas') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'EnableActivities') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'UseRSVP') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Capacity') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'MusicGenres') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Series') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Capacity') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'ExternalPrimaryUrl') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'OnlineEventProviderUrlVisibility') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'OnlineEventProviderUrl') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'PrimaryClassification') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'SellTickets') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'ThirdPartyTicketProvider') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'ThirdPartyTicketUrl') {
            return `
            // no code generated for EventsActionTypes.${type}`
          }
          else {
            return `
              case EventsActionTypes.${type}:
                return {
                  ...state,
                  events: {
                    ...state.events,
                    [action.payload.eventGuid]: {
                      ...state.events[action.payload.eventGuid],
                      ${field}: {
                        value: action.payload.${field}.value,
                        type: action.payload.${field}.type
                      }
                    }
                  }
                }`
          }
          break
          
        default:
          return `
            // no code generated for EventsActionTypes.${type}`
      }
    default:
      return `
        // no code generated for EventsActionTypes.${type}`
  }
}

fs.writeFile(`redux/events/reducer.ts`,
`${insertGeneratedMessage()}
import { State } from 'redux/store'
import { ActionTypes } from './actions'

import { 
  ecEvent_List_ByPerson_Get_ecEvent_List_ByPerson_Get_data 
} from 'submodules/EventCharm.GraphQLProxy/apollo/queries/types/ecEvent_List_ByPerson_Get'

// import * as EventsSelectors from './selectors'
import * as EventsActionTypes from './actions'

const INITIAL_STATE = {
  events: {} as ecEvent_List_ByPerson_Get_ecEvent_List_ByPerson_Get_data,
  activeEventGuid: null
}

export const eventsReducer = (state = INITIAL_STATE, action: ActionTypes) => {

  const selectorsState = { events: state } as State

  switch(action.type) {
    case EventsActionTypes.SET_ACTIVE_EVENT_GUID:
      return {
        ...state,
        activeEventGuid: action.payload
      }

    case EventsActionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.payload,
        activeEventGuid: 
          !state.activeEventGuid
            ? Object.keys(action.payload)?.[0]
            : state.activeEventGuid
      }

    case EventsActionTypes.ECEVENT_POSTERIMAGEURL_SET:
      return {
        ...state,
        events: {
          ...state.events,
          [action.payload.eventGuid]: {
            ...state.events[action.payload.eventGuid],
            posterImageUrl: action.payload.posterImageUrl,
          }
        }
      }
      
    ${actions.map((action) => generateActionReducerFunction(action)).join("\r\n")}
    
    default:
      return state
  }
}

`,err => { if (err) return console.log(err)}
)

// hook
fs.writeFile(`redux/events/hook.ts`,
`${insertGeneratedMessage()}
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

import * as Actions from './actions'
import * as Selectors from './selectors'

${actions.map(({ name }) => `import { ${name}Variables } from 'submodules/EventCharm.GraphQLProxy/apollo/mutations/types/${name}'`).join("\r\n")}

export const useEvents = () => {
  const dispatch = useDispatch()
  
  return {
    events: useSelector(Selectors.selectEvents),
    eventList: useSelector(Selectors.selectEventList),
    activeEventName: useSelector(Selectors.selectActiveEventName),
    activeEventGuid: useSelector(Selectors.selectActiveEventGuid),
    setEvents: useCallback((payload: any) => dispatch(Actions.setEvents(payload)), [dispatch]),
    setActiveEventGuid: useCallback((payload: string) => dispatch(Actions.setActiveEventGuid(payload)), [dispatch]),
    ${actions.map(({ name }) => `${name}: useCallback((payload: ${name}Variables) => dispatch(Actions.${name}(payload)), [dispatch]),`).join("\r\n")}
  }
}

`,err => { if (err) return console.log(err)}
)

// gqlproxymiddlewear

const generateActionHandler = ({
  type,
  name,
  scope,
  categoryTree,
  field,
  operation
}) => {
  switch(scope) {
    case 'ecEvent':
      switch (operation) {
        case 'Create':
        case 'Delete':
          if (categoryTree[0] === 'Series') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          return `
            case EventsActionTypes.${type}:
              mutation_${name}(
                {
                  eventGuid: payload.eventGuid,
                },
                ({ data, status, message }) => {
                  console.log('mutation_${name}', status, message)
                }
              )
              break`
        case 'Set':
          if (categoryTree[0] === 'PrimaryHost') {
            return `
              case EventsActionTypes.${type}:
                mutation_${name}(
                  {
                    eventGuid: payload.eventGuid,
                    eventHostGuid: payload.eventHostGuid,
                    eventHostType: payload.eventHostType
                  },
                  ({ data, status, message }) => {
                    console.log('mutation_${name}', status, message)
                  }
                )
                break`
          }

          if (categoryTree[0] === 'PosterImage') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'IsLiveMusic') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Capacity') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'MusicGenres') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'Series') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          if (categoryTree[0] === 'OnlineEventProviderUrl') {
            return `
              // no code generated for EventsActionTypes.${type}`
          }
          else {
            return `
              case EventsActionTypes.${type}:
                mutation_${name}(
                  {
                    eventGuid: payload.eventGuid,
                    ${field}: payload.${field}
                  },
                  ({ data, status, message }) => {
                    console.log('mutation_${name}', status, message)
                  }
                )
                break`
          }
          
        default:
          return `
            // no code generated for EventsActionTypes.${type}`
      }
    default:
      return `
        // no code generated for EventsActionTypes.${type}`
  }
}


fs.writeFile(`redux/gqlproxyMiddleware.ts`,
`${insertGeneratedMessage()}
import { Middleware, AnyAction } from 'redux'
import * as EventsActionTypes from 'redux/events/actions'

${actions.map(({ name }) => `import { mutation_${name} } from 'submodules/EventCharm.GraphQLProxy/gqlproxy/mutations/${name}'`).join("\r\n")}

  export const gqlproxyMiddleware : Middleware = ({ getState }) => next => (action : AnyAction) => {
  const payload = action.payload

  const activeEventGuid = getState().events.activeEventGuid

  switch (action.type) {
    ${actions.map((action) => generateActionHandler(action)).join("\r\n")}
  }
  next(action)
}

`,err => { if (err) return console.log(err)}
)