export const changeDisplay = (workname,img_path,classN) => ({
    type:'change_display',
    workname:workname,
    img_path:img_path,
    classN:classN
})

export const getScreenSize = (size) => ({
    type:'detect_screen_change',
    size:size
})