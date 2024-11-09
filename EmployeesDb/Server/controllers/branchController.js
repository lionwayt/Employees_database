import Branch from "../models/Branch.js";
 
const getBranches = async (req, res) => {
    try {
        const branches = await Branch.find()
        return res.status(200).json({success: true, branches})
    } catch (error){
        return res.status(500).json({success: false, error: "get branch server error"})
    }
}
const addBranch = async (req, res) => {
   try {
       const {branch_name, description} = req.body;
       const newBranch = new Branch({
        branch_name,
        description
       })
       await newBranch.save()
       return res.status(200).json({success: true, branch: newBranch})
   } catch(error) {
    console.log(error)
    return res.status(500).json({success: false, error: "add branch server error"})
   }
}

const getBranch = async (req, res) => {
    try {
        const {id} = req.params;
        const branch = await Branch.findById({_id: id})
        return res.status(200).json({success: true, branch})
    } catch (error){
        return res.status(500).json({success: false, error: "get branch server error"})
    }
    }

    const updateBranch = async (req, res) => {
        try{
            const {id} = req.params;
            const {branch_name, description} = req.body;
            const updateBra = await Branch.findByIdAndUpdate({_id: id}, {
                branch_name,
                description
            })
            return res.status(200).json({success: true, updateBra})
        } catch (error) {
            return res.status(500).json({success: false, error: "edit branch server error"})
        }
        }

        const deleteBranch = async (req, res) => {
            try{
                const {id} = req.params;
        
                const deleteBran = await Branch.findById({_id: id})
                await deleteBran.deleteOne()
                return res.status(200).json({success: true, deleteBran})
            } catch (error) {
                return res.status(500).json({success: false, error: "delete department server error"})
            }

        }
    



export {addBranch, getBranch, updateBranch, getBranches, deleteBranch}