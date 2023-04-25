export const DataReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        mailsData: state.mailsData.map((mail) =>
          mail.mId === action.id
            ? { ...mail, isDeleted: mail.isDeleted ? false : true , isSpam: mail.isSpam ? false : mail.isSpam}
            : mail
        ),
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
        mailsData: state.mailsData.map((mail) =>
        mail.mId === action.id
          ? { ...mail, isSpam: mail.isSpam ? false : true, isDeleted: mail.isDeleted ? false : mail.isDeleted }
          : mail
      ),
      };
    case "STAR_DATA":
      return {
        ...state,
        mailsData: state.mailsData.map((element) =>
          element.mId === action.id
            ? { ...element, isStarred: !element.isStarred }
            : element
        ),
      };
    case "FILTER_BY":
      return { ...state, filterBy: state.filterBy.find((item)=> item === action.value ) ? state.filterBy.filter((item)=> item !== action.value) : [...state.filterBy, action.value]};

    default:
      break;
  }
};
