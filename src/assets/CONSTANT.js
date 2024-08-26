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
    {key: 'fixed_slot', title: '托槽：'},
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

export const sexOptions = [
    {label: '男', value: '男'},
    {label: '女', value: '女'},
]

export const anshiOptions = [
    {label: '未知', value: '未知'},
    {label: '安氏一类', value: '安氏一类'},
    {label: '安氏二类', value: '安氏二类'},
    {label: '安氏三类', value: '安氏三类'},
]

export const guxingOptions = [
    {label: '未知', value: '未知'},
    {label: '骨性一类', value: '骨性一类'},
    {label: '骨性二类', value: '骨性二类'},
    {label: '骨性三类', value: '骨性三类'},
]

export const gaodiOptions = [
    {label: '未知', value: '未知'},
    {label: '高角', value: '高角'},
    {label: '低角', value: '低角'},
    {label: '均角', value: '均角'},
]

export const illnessLogOptions = [
    {label: '嘴凸', value: '嘴凸'},
    {label: '牙不齐', value: '牙不齐'},
    {label: '龅牙', value: '龅牙'},
    {label: '地包天', value: '地包天'},
    {label: '牙缝大', value: '牙缝大'},
    {label: '无法咬合', value: '无法咬合'},
]

export const likedescOptions = [
    {label: '排齐牙列', value: '排齐牙列'},
    {label: '关闭间隙', value: '关闭间隙'},
    {label: '改善牙前突', value: '改善牙前突'},
    {label: '改善反合', value: '改善反合'},
    {label: '改善开合', value: '改善开合'},
]

export const useTypeOptions = [
    {label: '全口', value: '全口'},
    {label: '上颌', value: '上颌'},
    {label: '下颌', value: '下颌'},
]

export const fixedSlotOptions = [
    {label: '托槽规格不确定', value: '托槽规格不确定'},
    {label: 'PT X1 双微管舌侧托槽', value: 'PT X1 双微管舌侧托槽'},
    {label: '普特PT 5 PLUS自锁 - MBT', value: '普特PT 5 PLUS自锁 - MBT'},
    {label: '普特PT 5 PLUS自锁 - ROTH', value: '普特PT 5 PLUS自锁 - ROTH'},
    {label: '普特PT 5 PLUS自锁 - 高转矩', value: '普特PT 5 PLUS自锁 - 高转矩'},
    {label: '普特PT 5 PLUS自锁 - 中转矩', value: '普特PT 5 PLUS自锁 - 中转矩'},
    {label: '普特PT 5 PLUS自锁 - 低转矩', value: '普特PT 5 PLUS自锁 - 低转矩'},
    {label: '普特 PT Twin自锁 - MBT', value: '普特 PT Twin自锁 - MBT'},
    {label: '普特 PT Twin自锁 - ROTH', value: '普特 PT Twin自锁 - ROTH'},
    {label: '普特 PT Twin自锁 - 高转矩', value: '普特 PT Twin自锁 - 高转矩'},
    {label: '普特 PT Twin自锁 - 中转矩', value: '普特 PT Twin自锁 - 中转矩'},
    {label: '普特 PT Twin自锁 - 低转矩', value: '普特 PT Twin自锁 - 低转矩'},
    {label: '普特PT 6 Plus自锁 - MBT', value: '普特PT 6 Plus自锁 - MBT'},
    {label: '普特PT 3 PLUS自锁- MBT', value: '普特PT 3 PLUS自锁- MBT'},
    {label: '珀晶陶瓷自锁托槽 - MBT', value: '珀晶陶瓷自锁托槽 - MBT'},
    {label: '单晶陶瓷托槽 - MBT', value: '单晶陶瓷托槽 - MBT'},
    {label: '美晶陶瓷托槽 - MBT', value: '美晶陶瓷托槽 - MBT'},
    {label: '普特 PT MAX 自锁 - MBT', value: '普特 PT MAX 自锁 - MBT'},
    {label: '普特 PT MAX 自锁 - ROTH', value: '普特 PT MAX 自锁 - ROTH'},
    {label: '普特 PT MAX 自锁 - 高转矩', value: '普特 PT MAX 自锁 - 高转矩'},
    {label: '普特 PT MAX 自锁 - 中转矩', value: '普特 PT MAX 自锁 - 中转矩'},
    {label: '普特 PT MAX 自锁 - 低转矩', value: '普特 PT MAX 自锁 - 低转矩'},
    {label: '″差动理念″ⅹ型槽沟自锁托槽', value: '″差动理念″ⅹ型槽沟自锁托槽'},
    {label: '普特PT 7自锁托槽 - 标准转矩', value: '普特PT 7自锁托槽 - 标准转矩'},
    {label: '普特PT 7自锁托槽 - 低转矩', value: '普特PT 7自锁托槽 - 低转矩'},
    {label: '普特PT 7自锁托槽 - 高转矩', value: '普特PT 7自锁托槽 - 高转矩'},
    {label: '普特PT 8自锁托槽 - 高转矩', value: '普特PT 8自锁托槽 - 高转矩'},
    {label: '普特PT 8自锁托槽 - 低转矩', value: '普特PT 8自锁托槽 - 低转矩'},
    {label: '普特PT 8自锁托槽 - 标准转矩 ', value: '普特PT 8自锁托槽 - 标准转矩 '},
    {label: '普特PT 5Master自锁托槽 - 标准转矩', value: '普特PT 5Master自锁托槽 - 标准转矩'},
    {label: '普特PT 5Master自锁托槽 - 低转矩', value: '普特PT 5Master自锁托槽 - 低转矩'},
    {label: '普特PT 5Master自锁托槽 - 高转矩', value: '普特PT 5Master自锁托槽 - 高转矩'},
    {label: '普特 PT K 自锁 - 标准转矩', value: '普特 PT K 自锁 - 标准转矩'},
    {label: '普特 PT K 自锁 - 高转矩', value: '普特 PT K 自锁 - 高转矩'},
    {label: '普特 PT K 自锁 - 低转矩', value: '普特 PT K 自锁 - 低转矩'},
    {label: '普特 PT K 自锁-混合转矩', value: '普特 PT K 自锁-混合转矩'},
]

export const fixedFaceSixthOptions = [
    {label: '默认', value: '默认'},
    {label: '普特自锁颊面管/ROTH', value: '普特自锁颊面管/ROTH'},
    {label: '第一磨牙粘结型揭盖颊面管/MBT', value: '第一磨牙粘结型揭盖颊面管/MBT'},
    {label: '第一磨牙粘结型不揭盖颊面管/MBT', value: '第一磨牙粘结型不揭盖颊面管/MBT'},
    {label: '普特自锁颊面管/MBT', value: '普特自锁颊面管/MBT'},
    {label: '第一磨牙粘结型不揭盖颊面管/Roth', value: '第一磨牙粘结型不揭盖颊面管/Roth'},
    {label: '第一磨牙粘结型揭盖颊面管/Roth', value: '第一磨牙粘结型揭盖颊面管/Roth'},
    {label: 'PT Max第一磨牙自锁颊面管', value: 'PT Max第一磨牙自锁颊面管'},
    {
        label: 'Liberty标准系列（MIM）第一磨牙粘结型不揭盖颊面管/MBT',
        value: 'Liberty标准系列（MIM）第一磨牙粘结型不揭盖颊面管/MBT'
    },
    {
        label: 'Liberty标准系列（MIM）第一磨牙粘结型揭盖颊面管/MBT',
        value: 'Liberty标准系列（MIM）第一磨牙粘结型揭盖颊面管/MBT'
    },
]

export const fixedFaceSeventhOptions = [
    {label: '默认', value: '默认'},
    {label: '第二磨牙粘结型不揭盖颊面管/MBT', value: '第二磨牙粘结型不揭盖颊面管/MBT'},
    {label: '第二磨牙粘结型不揭盖颊面管/Roth', value: '第二磨牙粘结型不揭盖颊面管/Roth'},
    {label: 'PT Max第二磨牙颊面管', value: 'PT Max第二磨牙颊面管'},
    {
        label: 'Liberty标准系列（MIM）第二磨牙粘结型不揭盖颊面管/MBT',
        value: 'Liberty标准系列（MIM）第二磨牙粘结型不揭盖颊面管/MBT'
    },
]

export const setPlanOptions = [
    {
        label: 'Alpha positioning method',
        value: 'Alpha定位法',
        desc: 'Place the bracket based on the crown center positioning method, adjust the bracket position with reference to the height positioning method, and finally fine-tune some bracket positions through the ideal correction target position (the edge ridge is continuous and smooth without steps), so that the end of the simulated main arch wire is a straight state.'
    },
    {
        label: 'The clinical crown center positioning method',
        value: '冠中心定位法',
        desc: 'The clinical crown center method is to place brackets at the clinical crown center of the teeth'
    },
    {
        label: 'Height positioning method',
        value: '高度定位法',
        desc: 'The height positioning method uses the height of the central incisor bracket as a reference, and calculates the height of other brackets based on it.'
    },
    {
        label: 'Edge ridge positioning method',
        value: '边缘脊定位法',
        desc: 'The edge ridge method determines the position of the brackets based on the difference between the edge ridge of the tooth and the centerline of the clinical crown.'
    },
]

export const specialtyOptions = [
    {label: '过矫正', value: '过矫正'},
    {label: '下前牙偏龈端定位0.5mm', value: '下前牙偏龈端定位0.5mm'},
    {label: '下前牙偏切端定位0.5mm', value: '下前牙偏切端定位0.5mm'},
    {label: '上前牙偏龈端定位0.5mm', value: '上前牙偏龈端定位0.5mm'},
    {label: '上前牙偏切端定位0.5mm', value: '上前牙偏切端定位0.5mm'},
]

export const yaoheOptions = [
    {label: '正常设计', value: '正常设计'},
    {label: '不设计托槽位置', value: '不设计托槽位置'},
    {label: '可为避开干扰往龈方设计', value: '可为避开干扰往龈方设计'},
]

export const tuocaoOptions = [
    {label: '不设计托槽位置', value: '不设计托槽位置'},
    {label: '正常设计', value: '正常设计'},
    {
        label: '为避免侵入牙龈往牙合方设计（若正常设计、底板侵入牙龈超过0.65mm，超过龈间沟深度需临床切龈处理）',
        value: '为避免侵入牙龈往牙合方设计（若正常设计、底板侵入牙龈超过0.65mm，超过龈间沟深度需临床切龈处理）'
    },
]

export const centerCorrectionOptions = [
    {label: '维持', value: '维持'},
    {label: '改善', value: '改善'},
]
export const centerCorrectionImproveOptions = [
    {label: '对齐上中线', value: '改善-对齐上中线'},
    {label: '对齐下中线', value: '改善-对齐下中线'},
    {label: '对齐面中线', value: '改善-对齐面中线'},
]

export const jiuzhengguanxiOptions = [
    {label: '维持', value: '维持'},
    {label: '调整', value: '调整'},
]

export const jiuzhengguanxiAdjustOptions = [
    {label: 'I类关系', value: 'I类关系'},
    {label: 'II类关系', value: 'II类关系'},
    {label: 'III类关系', value: 'III类关系'},
]

export const verticalOptions = [
    {label: '伸长', value: '伸长'},
    {label: '维持', value: '维持'},
    {label: '压低', value: '压低'},
]

export const kuogongOptions = [
    {label: '是', value: '是'},
    {label: '否', value: '否'},
]

export const quyouOptions = [
    {label: '是', value: '是'},
    {label: '否', value: '否'},
]

export const closeCorrectOptions = [
    {label: '维持', value: '维持'},
    {label: '关闭', value: '关闭'},
]

export const placeholderMap = {
    top_face_image: 'https://alpha.protectmec.com/images/common/zheng.png',
    right_half_image: 'https://alpha.protectmec.com/images/common/youban.png',
    left_half_image: 'https://alpha.protectmec.com/images/common/zuoban.png',
    left_face_image: 'https://alpha.protectmec.com/images/common/zuo.png',
    right_face_image: 'https://alpha.protectmec.com/images/common/you.png',
    smile_image: 'https://alpha.protectmec.com/images/common/weixiao.png',
    top_mouth_image: 'https://alpha.protectmec.com/images/common/kn1.png',
    bottom_mouth_image: 'https://alpha.protectmec.com/images/common/kn2.png',
    left_mouth_image: 'https://alpha.protectmec.com/images/common/kn3.png',
    right_mouth_image: 'https://alpha.protectmec.com/images/common/kn4.png',
    middle_mouth_image: 'https://alpha.protectmec.com/images/common/kn5.png',
    x_all_image: 'https://alpha.protectmec.com/images/common/x1.png',
    x_side_image: 'https://alpha.protectmec.com/images/common/x2.png',
    stl_up:'https://alpha.protectmec.com/images/common/kn1.png',
    stl_down:'https://alpha.protectmec.com/images/common/kn2.png',
    stl_all:'https://alpha.protectmec.com/images/common/kn5.png',

}