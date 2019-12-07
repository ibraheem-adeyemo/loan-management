import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './type';

const initialState = {
  isLoggedIn: false,
  stores: [{
    id: 1,
    name: 'Regalo Kitchen',
    logo: '/images/logos/download.png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: false,
  },
  {
    id: 2,
    name: 'Supermart',
    logo: '/images/logos/download (2).png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: true,
  },
  {
    id: 3,
    name: 'Buy for less',
    logo: '/images/logos/download (1).png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: false,
  },
  {
    id: 4,
    name: 'African International Kitchen',
    logo: '/images/logos/download.png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: true,
  },
  {
    id: 5,
    name: 'Regalo Kitchen',
    logo: '/images/logos/download.png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: true,
  },
  {
    id: 6,
    name: 'Supermart',
    logo: '/images/logos/download (2).png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: true,
  },
  {
    id: 7,
    name: 'Buy for less',
    logo: '/images/logos/download (1).png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: true,
  },
  {
    id: 8,
    name: 'African International Kitchen',
    logo: '/images/logos/download.png',
    starRating: '',
    tags: ['Foods/Drink', 'Clothes', 'Gadgets', 'Household'],
    isOpened: false,
  }
  ],
  isLoading: false,
  error: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_STARTED: return {
      ...state,
      isLoading: true
    }
    case FETCH_PRODUCTS_SUCCESS: return {
      ...state,
      products: action.payLoad,
      isLoading: false
    }
    case FETCH_PRODUCTS_FAILURE: return {
      ...state,
      error: action.error,
      isLoading: false
    }
    default: return state;
  }
}
