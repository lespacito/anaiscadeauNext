"use client";
import UsersTable from "@/components/dashboard/UsersTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-6">
      <h1 className="mb-8 text-3xl font-bold">
        Tableau de bord administrateur
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Ventes totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">123,456 €</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nouveaux utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Taux de conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12.3%</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statistiques utilisateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">100,000</p>
        </CardContent>
      </Card>
      <UsersTable />
    </div>
  );
};

export default Dashboard;
