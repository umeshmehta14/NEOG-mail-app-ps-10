export const DataReducer = (state, action) => {
    switch (action.type) {
      case "MAIL_DATA":
        return { ...state, mailsData: mails };
  
      case "DELETE_ITEM":
        return {
          ...state,
          TrashData: [...state.TrashData, action.item],
          mailsData: state.mailsData.filter(({ mId }) => mId !== action.item.mId),
        };
  
      case "READ_ITEM":
        return {
          ...state,
          mailsData: state.mailsData.map((element) =>
            element.mId === action.id
              ? { ...element, unread: !element.unread }
              : element
          ),
        };
  
      case "SPAM_DATA":
        return {
          ...state,
          mailsData: state.mailsData.map((element) =>
            element.mId === action.id ? { ...element, isSpam: true } : element
          ),
        };
      case "STAR_DATA":
        return {
          ...state,
          mailsData: state.mailsData.map((element) =>
            element.mId === action.id ? { ...element, isStarred: !element.isStarred } : element
          ),
        };
      case "TOGGLE_STAR":
        return { ...state, showStarred: !state.showStarred };
  
      case "TOGGLE_UNREAD":
        return { ...state, showUnread: !state.showUnread };
  
      default:
        break;
    }
  };