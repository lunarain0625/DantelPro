export const validatePatientByStep = (value, newPatient, toast) => {
    if (value === '2') {
        if (!newPatient.patient_name) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Patient name is required', life: 3000});
            return false
        }
        if (!newPatient.patient_sex) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Patient sex is required', life: 3000});
            return false
        }
        if (!newPatient.patient_age) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Patient age is required', life: 3000});
            return false
        }
    }

    if (value === '3') {
        if (!newPatient.use_type) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Application type is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.fixed_slot) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Bracket is required', life: 3000});
            return false
        }
        if (!newPatient.rectify_left) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Molar Relationship (left) is required',
                life: 3000
            });
            return false

        }
        if (!newPatient.rectify_right) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Molar Relationship (right) is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.center_correct) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Midline correction is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.close_correct) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Interdental space is required',
                life: 3000
            });
            return false
        }
    }

    if (value === '4') {
        if (!newPatient.images.top_face_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Top face image is required', life: 3000});
            return false
        }
        if (!newPatient.images.right_half_image) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Right half image is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.images.left_half_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Left half image is required', life: 3000});
            return false
        }
        if (!newPatient.images.left_face_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Left face image is required', life: 3000});
            return false
        }
        if (!newPatient.images.right_face_image) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Right face image is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.images.top_mouth_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Top mouth image is required', life: 3000});
            return false
        }
        if (!newPatient.images.smile_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Smile image is required', life: 3000});
            return false
        }
        if (!newPatient.images.bottom_mouth_image) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Bottom mouth image is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.images.left_mouth_image) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Left mouth image is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.images.right_mouth_image) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Right mouth image is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.images.middle_mouth_image) {
            toast.add({
                severity: 'error',
                summary: 'Error Message',
                detail: 'Middle mouth image is required',
                life: 3000
            });
            return false
        }
        if (!newPatient.images.x_all_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'X all image is required', life: 3000});
            return false
        }
        if (!newPatient.images.x_side_image) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'X side image is required', life: 3000});
            return false
        }
        if (!newPatient.stl_up) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Maxillary model is required', life: 3000});
            return false
        }
        if (!newPatient.stl_down) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Oral model is required', life: 3000});
            return false
        }
        if (!newPatient.stl_all) {
            toast.add({severity: 'error', summary: 'Error Message', detail: 'Oral model is required', life: 3000});
            return false
        }
    }
    return true
}