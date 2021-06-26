import { ref } from 'vue'
import { db } from '../firebase/config'

const getProjects = () => {
    const projects = ref([])
    const ids = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await db.collection("projects").orderBy("order").get()
            projects.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            for (let index = 0; index < res.docs.length; index++) {
                ids.value[index] = res.docs[index].id;
            }
        } catch (err) {
            console.log(err)
        }
    }

    return { projects, error, ids, load }
}

export default getProjects