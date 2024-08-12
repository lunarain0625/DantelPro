export const patientItems = [
    {key: 'anshi', title: '安氏分类：'},
    {key: 'guxing', title: '骨性分类：'},
    {key: 'gaodi', title: 'FMA：'},
    {key: 'illness_log', title: '主诉病史：'},
    {key: 'likedesc', title: '矫治目标：'},
]
export const designItems = [
    {key: 'use_type', title: '应用类型：'},
    {key: 'set_plan', title: '定位方案：'},
    {key: 'tssheji', title: '特殊设计：'},
    {key: 'illness_log', title: '托槽：'},
    {key: 'fixed_face', title: '颊面管：'},
    {key: 'tsqingkuang_yaohe', title: '对存在咬合干扰的托槽：'},
    {key: 'fixed_slot_desc', title: '托槽备注：'},
    {key: 'tsqingkuang_tuocao', title: '对于托槽底板侵入牙龈较多的情况：'},
    {key: 'tooth_seat_txt', title: '牙位信息：'},
    {key: 'tooth_seat_desc', title: '备注：'},
    {key: 'zikang', title: '支抗选择：'},
    {key: 'center_correct', title: '中线纠正：'},
    {key: 'front_vertical', title: '上前牙垂直向：'},
    {key: 'kuogong', title: '扩弓：'},
    {key: 'close_correct', title: '牙列间隙：'},
    {key: 'jiuzhengguanxi', title: '矢状向：'},
    {key: 'back_vertical', title: '上后牙垂直向：'},
    {key: 'quyou', title: '去釉：'},
]

export const faceImageItems = [
    {key: 'top_face_image', title: '正面像'},
    {key: 'right_half_image', title: '右侧45度面相'},
    {key: 'left_half_image', title: '左侧45度面相'},
    {key: 'left_face_image', title: '左侧面相'},
    {key: 'right_face_image', title: '右侧面相'},
    {key: 'smile_image', title: '正面微笑(需露牙齿)'},
];

export const oralImageItems = [
    {key: 'top_mouth_image', title: '上颌颌面口内像'},
    {key: 'bottom_mouth_image', title: '下颌颌面口内像'},
    {key: 'left_mouth_image', title: '左侧口内磨牙关系像'},
    {key: 'right_mouth_image', title: '右侧口内磨牙关系像'},
    {key: 'middle_mouth_image', title: '正面口内像'},
];

export const xrayImageItems = [
    {key: 'x_all_image', title: '全景片'},
    {key: 'x_side_image', title: '头颅侧位片'},
];

export const caseLogItems = [
    {key: 'end', title: '物流状态', icon: 'pi pi-truck'},
    {key: 'exp', title: '生产制造', icon: 'pi pi-wrench'},
    {key: 'plan', title: '矫治方案', icon: 'pi pi-file-check'},
    {key: 'model', title: '模型审核', icon: 'pi pi-cog'},
    {key: 'info', title: '病例审核', icon: 'pi pi-file'},
];

export const solutionStatusMap = {
    '-1': {title: '被驳回', severity: 'danger'},
    '1': {title: '已通过', severity: 'success'},
    '0': {title: '待审核', severity: 'warning'},
}