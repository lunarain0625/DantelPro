export const patientItems = [
    {key: 'anshi', title: 'Angle\'s classification:'},
    {key: 'guxing', title: 'bone classification:'},
    {key: 'gaodi', title: 'FMA:'},
    {key: 'illness_log', title: 'Chief complaint/medical history:'},
    {key: 'likedesc', title: 'target of treatment:'},
]
export const designItems = [
    {key: 'use_type', title: 'Application type:'},
    {key: 'set_plan', title: 'Positioning scheme:'},
    {key: 'tssheji', title: 'Special design:'},
    {key: 'fixed_slot', title: 'Bracket:'},
    {key: 'fixed_face', title: 'Buccal tube:'},
    {key: 'tsqingkuang_yaohe', title: 'For brackets with occlusal interference:'},
    {key: 'fixed_slot_desc', title: 'Remarks for brackets:'},
    {key: 'tsqingkuang_tuocao', title: 'For cases that bracket base frequently interferences with the gingiva:'},
    {key: 'tooth_seat_txt', title: 'Teeth position:'},
    {key: 'tooth_seat_desc', title: 'Teeth position remarks：'},
    // {key: 'zikang', title: '支抗选择：'},
    {key: 'center_correct', title: 'Midline correction:'},
    {key: 'front_vertical', title: 'Vertical orientation of upper anterior teeth：'},
    {key: 'kuogong', title: '扩弓：'},
    {key: 'close_correct', title: 'Interdental space：'},
    {key: 'jiuzhengguanxi', title: 'Sagittal：'},
    {key: 'back_vertical', title: 'Vertical orientation of upper posterior teeth：'},
    {key: 'quyou', title: 'stripping of enamel：'},
]

export const faceImageItems = [
    {key: 'top_face_image', title: 'Frontal photo'},
    {key: 'right_half_image', title: 'Right 3/4 side photo'},
    {key: 'left_half_image', title: 'Left 3/4 side photo'},
    {key: 'left_face_image', title: 'Outer left photo'},
    {key: 'right_face_image', title: 'Outer right photo'},
    {key: 'smile_image', title: 'Smiling photo'},
];

export const oralImageItems = [
    {key: 'top_mouth_image', title: 'Maxillogram view'},
    {key: 'bottom_mouth_image', title: 'Mandibular view'},
    {key: 'left_mouth_image', title: 'Left intraoral view'},
    {key: 'right_mouth_image', title: 'Right intraoral view'},
    {key: 'middle_mouth_image', title: 'Intraoral frontal view'},
];

export const xrayImageItems = [
    {key: 'x_all_image', title: 'Panoramic film'},
    {key: 'x_side_image', title: 'Lateral film'},
];

export const caseLogItems = [
    {key: 'end', title: 'Shipping status', icon: 'pi pi-truck'},
    {key: 'exp', title: 'Production', icon: 'pi pi-wrench'},
    {key: 'plan', title: 'Orthodontic treatment plan', icon: 'pi pi-file-check'},
    {key: 'model', title: 'Model Review', icon: 'pi pi-cog'},
    {key: 'info', title: 'Case Review', icon: 'pi pi-file'},
];

export const solutionStatusMap = {
    '-1': {title: '被驳回', severity: 'danger'},
    '1': {title: '已通过', severity: 'success'},
    '0': {title: '待审核', severity: 'warning'},
}

export const sexOptions = [
    {label: 'Male', value: '男'},
    {label: 'Female', value: '女'},
]

export const anshiOptions = [
    {label: 'Unknown', value: '未知'},
    {label: 'Angle Class I', value: '安氏一类'},
    {label: 'Angle Class II', value: '安氏二类'},
    {label: 'Angle Class III', value: '安氏三类'},
]

export const guxingOptions = [
    {label: 'Unknown', value: '未知'},
    {label: 'Skeletal Class I', value: '骨性一类'},
    {label: 'Skeletal Class II', value: '骨性二类'},
    {label: 'Skeletal Class III', value: '骨性三类'},
]

export const gaodiOptions = [
    {label: 'Unknown', value: '未知'},
    {label: 'High Angle', value: '高角'},
    {label: 'Low Angle', value: '低角'},
    {label: 'Equal Angle', value: '均角'},
]

export const illnessLogOptions = [
    {label: 'Mouth protrusion', value: 'Mouth protrusion'},
    {label: 'Tooth irregularity', value: 'Tooth irregularity'},
    {label: 'Cover bite', value: 'Cover bite'},
    {label: 'Under bite', value: 'Under bite'},
    {label: 'Large gap between teeth', value: 'Large gap between teeth'},
    {label: 'Can not bite', value: 'Can not bite'},
]

export const likedescOptions = [
    {label: 'Align the dentition', value: 'Align the dentition'},
    {label: 'Close the gap', value: 'Close the gap'},
    {label: 'Improve protrusion of the teeth', value: 'Improve protrusion of the teeth'},
    {label: 'Improve cross bite', value: 'Improve cross bite'},
    {label: 'Improve opening deformity', value: 'Improve opening deformity'},
]

export const useTypeOptions = [
    {label: 'Full Mouth', value: '全口'},
    {label: 'Maxillary', value: '上颌'},
    {label: 'Mandibular', value: '下颌'},
]

export const fixedSlotOptions = [
    {label: 'Brackets specification not confirmed', value: '托槽规格不确定'},
    // {label: 'PT X1 双微管舌侧托槽', value: 'PT X1 双微管舌侧托槽'},
    // {label: '普特PT 5 PLUS自锁 - MBT', value: '普特PT 5 PLUS自锁 - MBT'},
    // {label: '普特PT 5 PLUS自锁 - ROTH', value: '普特PT 5 PLUS自锁 - ROTH'},
    // {label: '普特PT 5 PLUS自锁 - 高转矩', value: '普特PT 5 PLUS自锁 - 高转矩'},
    // {label: '普特PT 5 PLUS自锁 - 中转矩', value: '普特PT 5 PLUS自锁 - 中转矩'},
    // {label: '普特PT 5 PLUS自锁 - 低转矩', value: '普特PT 5 PLUS自锁 - 低转矩'},
    // {label: '普特 PT Twin自锁 - MBT', value: '普特 PT Twin自锁 - MBT'},
    // {label: '普特 PT Twin自锁 - ROTH', value: '普特 PT Twin自锁 - ROTH'},
    // {label: '普特 PT Twin自锁 - 高转矩', value: '普特 PT Twin自锁 - 高转矩'},
    // {label: '普特 PT Twin自锁 - 中转矩', value: '普特 PT Twin自锁 - 中转矩'},
    // {label: '普特 PT Twin自锁 - 低转矩', value: '普特 PT Twin自锁 - 低转矩'},
    // {label: '普特PT 6 Plus自锁 - MBT', value: '普特PT 6 Plus自锁 - MBT'},
    // {label: '普特PT 3 PLUS自锁- MBT', value: '普特PT 3 PLUS自锁- MBT'},
    // {label: '珀晶陶瓷自锁托槽 - MBT', value: '珀晶陶瓷自锁托槽 - MBT'},
    // {label: '单晶陶瓷托槽 - MBT', value: '单晶陶瓷托槽 - MBT'},
    // {label: '美晶陶瓷托槽 - MBT', value: '美晶陶瓷托槽 - MBT'},
    // {label: '普特 PT MAX 自锁 - MBT', value: '普特 PT MAX 自锁 - MBT'},
    // {label: '普特 PT MAX 自锁 - ROTH', value: '普特 PT MAX 自锁 - ROTH'},
    // {label: '普特 PT MAX 自锁 - 高转矩', value: '普特 PT MAX 自锁 - 高转矩'},
    // {label: '普特 PT MAX 自锁 - 中转矩', value: '普特 PT MAX 自锁 - 中转矩'},
    // {label: '普特 PT MAX 自锁 - 低转矩', value: '普特 PT MAX 自锁 - 低转矩'},
    // {label: '″差动理念″ⅹ型槽沟自锁托槽', value: '″差动理念″ⅹ型槽沟自锁托槽'},
    // {label: '普特PT 7自锁托槽 - 标准转矩', value: '普特PT 7自锁托槽 - 标准转矩'},
    // {label: '普特PT 7自锁托槽 - 低转矩', value: '普特PT 7自锁托槽 - 低转矩'},
    // {label: '普特PT 7自锁托槽 - 高转矩', value: '普特PT 7自锁托槽 - 高转矩'},
    // {label: '普特PT 8自锁托槽 - 高转矩', value: '普特PT 8自锁托槽 - 高转矩'},
    // {label: '普特PT 8自锁托槽 - 低转矩', value: '普特PT 8自锁托槽 - 低转矩'},
    // {label: '普特PT 8自锁托槽 - 标准转矩 ', value: '普特PT 8自锁托槽 - 标准转矩 '},
    // {label: '普特PT 5Master自锁托槽 - 标准转矩', value: '普特PT 5Master自锁托槽 - 标准转矩'},
    // {label: '普特PT 5Master自锁托槽 - 低转矩', value: '普特PT 5Master自锁托槽 - 低转矩'},
    // {label: '普特PT 5Master自锁托槽 - 高转矩', value: '普特PT 5Master自锁托槽 - 高转矩'},
    {label: 'PT K Self-ligating brackets- Standard Torque', value: '普特 PT K 自锁 - 标准转矩'},
    {label: 'PT K Self-ligating brackets- High Torque', value: '普特 PT K 自锁 - 高转矩'},
    {label: 'PT K Self-ligating brackets- Low Torque', value: '普特 PT K 自锁 - 低转矩'},
    {label: 'PT K Self-ligating brackets- Mixed Torque', value: '普特 PT K 自锁-混合转矩'},
]

export const fixedFaceSixthOptions = [
    {label: 'default', value: '默认'},
    // {label: '普特自锁颊面管/ROTH', value: '普特自锁颊面管/ROTH'},
    // {label: '第一磨牙粘结型揭盖颊面管/MBT', value: '第一磨牙粘结型揭盖颊面管/MBT'},
    {label: '1st Molar Bondable Non-Convertible MBT Buccal Tube 0.022', value: '第一磨牙粘结型不揭盖颊面管/MBT'},
    // {label: '普特自锁颊面管/MBT', value: '普特自锁颊面管/MBT'},
    // {label: '第一磨牙粘结型不揭盖颊面管/Roth', value: '第一磨牙粘结型不揭盖颊面管/Roth'},
    // {label: '第一磨牙粘结型揭盖颊面管/Roth', value: '第一磨牙粘结型揭盖颊面管/Roth'},
    // {label: 'PT Max第一磨牙自锁颊面管', value: 'PT Max第一磨牙自锁颊面管'},
    // {
    //     label: 'Liberty标准系列（MIM）第一磨牙粘结型不揭盖颊面管/MBT',
    //     value: 'Liberty标准系列（MIM）第一磨牙粘结型不揭盖颊面管/MBT'
    // },
    // {
    //     label: 'Liberty标准系列（MIM）第一磨牙粘结型揭盖颊面管/MBT',
    //     value: 'Liberty标准系列（MIM）第一磨牙粘结型揭盖颊面管/MBT'
    // },
]

export const fixedFaceSeventhOptions = [
    {label: 'default', value: '默认'},
    // {label: '第二磨牙粘结型不揭盖颊面管/MBT', value: '第二磨牙粘结型不揭盖颊面管/MBT'},
    // {label: '第二磨牙粘结型不揭盖颊面管/Roth', value: '第二磨牙粘结型不揭盖颊面管/Roth'},
    // {label: 'PT Max第二磨牙颊面管', value: 'PT Max第二磨牙颊面管'},
    // {
    //     label: 'Liberty标准系列（MIM）第二磨牙粘结型不揭盖颊面管/MBT',
    //     value: 'Liberty标准系列（MIM）第二磨牙粘结型不揭盖颊面管/MBT'
    // },
    {
        label: "1st Molar Bondable Non-Convertible MBT Buccal Tube 0.022  Single",
        value: "1st Molar Bondable Non-Convertible MBT Buccal Tube 0.022  Single"
    }
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
    {label: 'Over-correction', value: '过矫正'},
    {label: 'Positioning of lower anterior teeth at 0.5mm to gingival side', value: '下前牙偏龈端定位0.5mm'},
    {label: 'Positioning of lower anterior teeth at 0.5mm to incisal side', value: '下前牙偏切端定位0.5mm'},
    {label: 'Positioning of upper anterior teeth at 0.5mm to gingival side', value: '上前牙偏龈端定位0.5mm'},
    {label: 'Positioning of upper anterior teeth at 0.5mm to incisal side', value: '上前牙偏切端定位0.5mm'},
]

export const yaoheOptions = [
    {label: 'Normal design', value: '正常设计'},
    {label: 'Don\'t design the position of brackets', value: '不设计托槽位置'},
    {label: 'Can be designed to avoid interference with the gingiva ', value: '可为避开干扰往龈方设计'},
]

export const tuocaoOptions = [
    {label: 'Don\'t design the position of brackets', value: '不设计托槽位置'},
    {label: 'Normal design', value: '正常设计'},
    {
        label: 'In order to avoid intrusion into the gums, the design is directed towards the occlusal side',
        value: '为避免侵入牙龈往牙合方设计（若正常设计、底板侵入牙龈超过0.65mm，超过龈间沟深度需临床切龈处理）'
    },
]

export const centerCorrectionOptions = [
    {label: 'Maintain', value: '维持'},
    {label: 'Improve', value: '改善'},
]
export const centerCorrectionImproveOptions = [
    {label: 'Align the upper midline', value: '改善-对齐上中线'},
    {label: 'Align the lower midline', value: '改善-对齐下中线'},
    {label: 'Align the face midline', value: '改善-对齐面中线'},
]

export const jiuzhengguanxiOptions = [
    {label: 'Maintain', value: '维持'},
    {label: 'Adjustment', value: '调整'},
]

export const jiuzhengguanxiAdjustOptions = [
    {label: 'Type I Relationship', value: 'I类关系'},
    {label: 'Type II Relationship', value: 'II类关系'},
    {label: 'Type III Relationship', value: 'III类关系'},
]

export const verticalOptions = [
    {label: 'Extend', value: '伸长'},
    {label: 'Maintain', value: '维持'},
    {label: 'Depress', value: '压低'},
]

export const kuogongOptions = [
    {label: 'Yes', value: '是'},
    {label: 'No', value: '否'},
]

export const quyouOptions = [
    {label: 'Yes', value: '是'},
    {label: 'No', value: '否'},
]

export const closeCorrectOptions = [
    {label: 'Maintain', value: '维持'},
    {label: 'Close', value: '关闭'},
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
    stl_up: 'https://alpha.protectmec.com/images/common/kn1.png',
    stl_down: 'https://alpha.protectmec.com/images/common/kn2.png',
    stl_all: 'https://alpha.protectmec.com/images/common/kn5.png',

}

export const BRACKETS_REMARKS_PLACEHOLDER = 'If different bracket torque combinations are required, please kindly put a note here...'

