import express from "express"

//게시물 관련 모든 API의 엔드포인트를 관리하는 라우터
const router = express.Router();

router.get("/", async(req, res) => {
  try {
    res.status(200).json({ message: "GET요청 성공했습니다"})
    console.log("GET요청 성공")
  } catch (error) {
    console.log(`GET요청 에러: ${error}`)
  }
});

//GET /posts/:id - 
router.get("/:id", async(req, res) => {})

//POST /posts - 새 게시물 추가
router.post("/", async(req, res) => {})

//PUT /posts/:id - 특정 게시물 수정
router.put("/:id", async(req, res) => {})

//삭제
router.delete("/:id", async(req, res) => {})

export default router;