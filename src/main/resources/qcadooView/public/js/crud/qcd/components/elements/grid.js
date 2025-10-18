// 1. Biến
private boolean softDeletable = false;
private String softDeletableAuthorizationRole = "";

// 2. Getter
public boolean isSoftDeletable() { return softDeletable; }
public String getSoftDeletableAuthorizationRole() { return softDeletableAuthorizationRole; }

// 3. Parse XML
else if ("softDeletable".equals(option.getType())) { softDeletable = Boolean.parseBoolean(option.getValue()); }
else if ("softDeletableAuthorizationRole".equals(option.getType())) { softDeletableAuthorizationRole = option.getValue(); }

// 4. JS option
json.put("softDeletable", softDeletable);

// 5. Kiểm tra quyền
private boolean isSoftDeleteAllowed() {
    return softDeletable && (Strings.isNullOrEmpty(softDeletableAuthorizationRole)
        || securityRolesService.canAccess(softDeletableAuthorizationRole));
}

inProcessQualityStandardH

//        // Lấy danh sách ID của tất cả qualityCriteria chưa bị xóa
//        List<Long> activeIds = dataDefinitionService.get("qm", "qualityCriteria").find()
//                .add(SearchRestrictions.eq("deleted", false))
//                .list()
//                .getEntities()
//                .stream()
//                .map(Entity::getId)
//                .collect(Collectors.toList());
//
//        // Nếu không có qualityCriteria nào active → đảm bảo kết quả rỗng
//        // Ngược lại → chỉ lấy các dòng có qualityCriteria.id nằm trong danh sách activeIds
//        scb.add(activeIds.isEmpty()
//                ? SearchRestrictions.idEq(-1L)
//                : SearchRestrictions.in("qualityCriteria.id", activeIds));