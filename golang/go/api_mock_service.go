package openapi

// mock用の新しいservice構造体
type DefaultMockService struct {
}

// mock用サービスのコンストラクタ
func NewDefaultMockService() DefaultApiServicer {
	return &DefaultMockService{}
}

// mock用serviceのメソッド
func (s *DefaultMockService) PetsIdGet(id int64) (interface{}, error) {
	pet := Pets{
		Id:     id,
		Name:   "doggie",
		Status: "available",
	}
	return pet, nil
}
