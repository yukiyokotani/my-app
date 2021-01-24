package openapi

import (
	"errors"
	"time"
)

// mock用の新しいservice構造体
type DefaultMockService struct {
}

// mock用サービスのコンストラクタ
func NewDefaultMockService() HinatazakaApiServicer {
	return &DefaultMockService{}
}

// mock用serviceのメソッド
// GetDiscographyId - Your GET endpoint
func (s *DefaultMockService) GetDiscographyId(id string) (interface{}, error) {
	discography := Discography{
		Id:        1,
		Title:     "キュン",
		Type:      "single",
		CenterId:  14,
		CreatedAt: time.Now(),
	}
	return discography, nil
}

// GetMemberId -
func (s *DefaultMockService) GetMemberId(id int64) (interface{}, error) {
	member := Member{
		Id:        14,
		Name:      "小坂菜緒",
		Age:       18,
		CreatedAt: time.Now(),
	}
	return member, nil
}

// PostMemberId -
func (s *DefaultMockService) PostMemberId(id string, member Member) (interface{}, error) {
	// TODO - update PostMemberId with the required logic for this service method.
	// Add api_hinatazaka_service.go to the .openapi-generator-ignore to avoid overwriting this service implementation when updating open api generation.
	return nil, errors.New("service method 'PostMemberId' not implemented")
}
