export const LOG_TITLE = 'LOG_TITLE';

export const logTitle = newTitle => {
    return {
        type: LOG_TITLE,
        payload: newTitle,
    }
}

